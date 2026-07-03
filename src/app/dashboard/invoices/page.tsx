import InvoicesPage from "@/modules/presentation/dashboard/invoices-page";

type TSearchParams = Promise<{
  query?: string;
  page?: string;
}>;

const InvoicesPageMain = async ({
  searchParams: searchParamsProps,
}: {
  searchParams: TSearchParams;
}) => {
  const searchParams = await searchParamsProps;

  return <InvoicesPage searchParams={searchParams} />;
};

export default InvoicesPageMain;
