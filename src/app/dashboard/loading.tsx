import { Spinner } from "@/components/ui/spinner";
import DashboardSkeleton from "@/modules/components/dashboard/dashboard-skeleton";
import React from "react";

const Loading = () => {
  return (
    // <div className="flex h-[calc(100vh-4rem)] w-full flex-row items-center justify-center gap-3">
    //   <Spinner className="size-8" />
    //   <span className="text-2xl font-semibold">Loading...</span>
    // </div>
    <DashboardSkeleton />
  );
};

export default Loading;
