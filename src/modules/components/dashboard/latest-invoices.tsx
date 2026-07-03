import InvoicesDetails from "./invoices-details";
import { fetchLatestInvoices } from "@/lib/data";

const LatestInvoices = async () => {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="w-full md:col-span-4">
      <InvoicesDetails latestInvoices={latestInvoices} />
    </div>
  );
};

export default LatestInvoices;
