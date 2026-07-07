import UpdateInvoicePage from "@/modules/presentation/dashboard/update-invoice-page";

const UpdateInvoicePageMain = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const params = await props.params;

  return <UpdateInvoicePage id={params.id} />;
};

export default UpdateInvoicePageMain;
