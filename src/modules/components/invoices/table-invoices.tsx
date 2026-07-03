"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Invoice } from "@/lib/definitions";
import { cn } from "@/lib/utils";

const TableInvoices = ({ invoices }: { invoices: Invoice[] }) => {
  const statusColor = {
    paid: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
    pending:
      "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
    failed: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  };

  return (
    <Table>
      <TableCaption>A list of your recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-70">Id</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => {
          return (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    invoice.status === "paid"
                      ? statusColor.paid
                      : invoice.status === "pending"
                        ? statusColor.pending
                        : "",
                  )}
                >
                  {invoice.status}
                </Badge>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableInvoices;
