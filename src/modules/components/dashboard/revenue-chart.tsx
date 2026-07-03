import ChartDetails from "./chart-details";
import { fetchRevenue } from "@/lib/data";

const RevenueChart = async () => {
  const revenue = await fetchRevenue();

  return (
    <div className="w-full md:col-span-4">
      <ChartDetails revenue={revenue} />
    </div>
  );
};

export default RevenueChart;
