import { fetchCustomers, fetchInvoiceById } from "@/lib/data";
import InvoiceBreadcrumbs from "@/modules/components/invoices/invoice-breadcrumbs";
import UpdateInvoiceForm from "@/modules/components/invoices/update-invoice-form";
import { notFound } from "next/navigation";

const updateInvoiceBreadcrumbs = [
  { label: "Invoices", href: "/dashboard/invoices", active: false },
  { label: "Update Invoice", href: "", active: true },
];

const UpdateInvoicePage = async ({ id }: { id: string }) => {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <InvoiceBreadcrumbs breadcrumbs={updateInvoiceBreadcrumbs} />
      <UpdateInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
};

export default UpdateInvoicePage;
