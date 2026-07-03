"use client";

import CardComp from "./card-comp";

type cardDataTypes = {
  numberOfCustomers: number;
  numberOfInvoices: number;
  totalPaidInvoices: string;
  totalPendingInvoices: string;
};

const SummaryInfo = ({ cardData }: { cardData: cardDataTypes }) => {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CardComp title="Collected" value={totalPaidInvoices} type="collected" />
      <CardComp title="Pending" value={totalPendingInvoices} type="pending" />
      <CardComp
        title="Total Invoices"
        value={numberOfInvoices}
        type="invoices"
      />
      <CardComp
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </div>
  );
};

export default SummaryInfo;
