import { fetchCustomers } from "@/lib/data";
import CreateInvoiceForm from "@/modules/components/invoices/create-invoice-form";
import InvoiceBreadcrumbs from "@/modules/components/invoices/invoice-breadcrumbs";

const creteInvoiceBreadcrumbs = [
  { label: "Invoices", href: "/dashboard/invoices", active: false },
  { label: "Create Invoice", href: "", active: true },
];

const CreateInvoicePage = async () => {
  const customers = await fetchCustomers();

  return (
    <main>
      <InvoiceBreadcrumbs breadcrumbs={creteInvoiceBreadcrumbs} />
      <CreateInvoiceForm customers={customers} />
    </main>
  );
};

export default CreateInvoicePage;
