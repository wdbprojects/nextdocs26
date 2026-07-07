"use server";

import { routes } from "@/config/routes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { z } from "zod";

const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "nextdocs26",
  username: "ronyortiz",
  password: "",
});

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

/* CREATE INVOICE ACTION */
const CreateInvoice = FormSchema.omit({ id: true, date: true });
export const createInvoiceAction = async (formData: FormData) => {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];
  try {
    // INSERT INTO DATABASE
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date) VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  } catch (err) {
    console.log(err);
    return { message: "Database error, failed to create invoice" };
  }
  revalidatePath(routes.invoices);
  redirect(routes.invoices);
};

/* UPDATE INVOICE ACTION */
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
export const updateInvoiceAction = async (id: string, formData: FormData) => {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;
  try {
    await sql`
    UPDATE invoices SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (err) {
    console.log(err);
    return { message: "Database error, failed to update invoice" };
  }
  revalidatePath(routes.invoices);
  redirect(routes.invoices);
};

/* UPDATE INVOICE ACTION */
export const deleteInvoice = async (id: string) => {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath(routes.invoices);
};
