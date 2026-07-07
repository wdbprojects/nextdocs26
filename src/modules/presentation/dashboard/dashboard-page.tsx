import { Suspense } from "react";
import LatestInvoices from "@/modules/components/invoices/latest-invoices";
import RevenueChart from "@/modules/components/dashboard/revenue-chart";

import {
  CardsSkeleton,
  InvoiceSkeleton,
  RevenueChartSkeleton,
} from "@/modules/components/dashboard/dashboard-skeleton";
import CardWrapper from "@/modules/components/dashboard/card-wrapper";

const DashboardPage = async () => {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>

      {/* REVENUE CHART */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
      {/* LATEST INVOICES */}
    </main>
  );
};

export default DashboardPage;
