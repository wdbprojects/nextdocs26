import { Suspense } from "react";
import SearchInvoice from "@/modules/components/invoices/search-invoice";
import TableInvoices from "@/modules/components/invoices/table-invoices";
import { InvoicesTableSkeleton } from "@/modules/components/dashboard/dashboard-skeleton";
import { fetchFilteredInvoices, fetchInvoicesPages } from "@/lib/data";
import Pagination from "@/modules/components/invoices/pagination";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

interface ISearchParams {
  searchParams: {
    query?: string;
    page?: string;
  };
}

const InvoicesPage = async ({ searchParams }: ISearchParams) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const invoices = await fetchFilteredInvoices(query, currentPage);
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl">Invoices</h2>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchInvoice placeholder="Search invoices..." />
        <Button
          variant="default"
          render={<Link href={routes.createInvoice}>Create Invoice</Link>}
          nativeButton={false}
        />
      </div>
      <div className="mt-4">
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <TableInvoices invoices={invoices} />
        </Suspense>
        <div>
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
