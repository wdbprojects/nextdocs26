"use client";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerField } from "@/lib/definitions";
import { toast } from "sonner";

/* SHADCN COMPONENTS */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldTitle,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createInvoiceAction } from "@/lib/actions";
import { useTransition } from "react";

const formSchema = z.object({
  customerId: z.string().nonempty(),
  amount: z
    .number({ message: "Only numbers allowed in this field" })
    .min(1, { message: "Amount must be at least 1." }),
  status: z.string().nonempty(),
});

const CreateInvoiceForm = ({ customers }: { customers: CustomerField[] }) => {
  const [pendingCreateInvoice, startCreateInvoiceTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerId: "",
      amount: undefined,
      status: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    startCreateInvoiceTransition(async () => {
      const formData = new FormData();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key as keyof typeof data].toString());
        }
      }
      const response = await createInvoiceAction(formData);
    });
    toast.success("Invoice created successfully");
    reset();
  };

  return (
    <Card className="max-w-md p-4">
      <CardHeader>
        <CardTitle className="text-lg leading-tight">
          Create a new invoice
        </CardTitle>
        <CardDescription>
          Enter all required data to create the invoice
        </CardDescription>
      </CardHeader>
      <form
        id="create-invoice-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <CardContent>
          <FieldGroup>
            {/* CUSTOMER NAME */}
            <Controller
              name="customerId"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field
                    orientation="responsive"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldContent>
                      <FieldLabel htmlFor="select-customer">
                        Choose a customer
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="select-customer"
                        aria-invalid={fieldState.invalid}
                        className="min-w-30"
                      >
                        <SelectValue placeholder="Select a customer" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        {customers.map((customer) => {
                          return (
                            <SelectItem key={customer.id} value={customer.id}>
                              {customer.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </Field>
                );
              }}
            />

            {/* INVOICE AMOUNT */}
            <Controller
              name="amount"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field
                    orientation="responsive"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldContent>
                      <FieldLabel htmlFor="select-customer">
                        Enter an amount
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        type="number"
                        value={field.value ?? ""}
                        placeholder="Amount must be 1 or more"
                        onChange={(event) => {
                          const value = event.target.value;
                          field.onChange(value === "" ? 0 : Number(value));
                        }}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                );
              }}
            />

            {/* INVOICE STATUS */}
            <Controller
              name="status"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <FieldSet>
                    <FieldLegend>Invoice Status</FieldLegend>
                    <FieldDescription>
                      Invoices appear as pending when payments are not confirmed
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FieldLabel htmlFor="invoice-status-paid">
                        <Field
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldContent>
                            <FieldTitle>Paid</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value="paid"
                            id="invoice-status-paid"
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      </FieldLabel>
                      <FieldLabel htmlFor="invoice-status-pending">
                        <Field
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldContent>
                            <FieldTitle>Pending</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value="pending"
                            id="invoice-status-pending"
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      </FieldLabel>
                    </RadioGroup>
                  </FieldSet>
                );
              }}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter className="mt-6 flex justify-end gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              return reset();
            }}
            className="w-full flex-1"
          >
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            className="w-full flex-1"
            form="create-invoice-form"
          >
            Create Invoice
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateInvoiceForm;
