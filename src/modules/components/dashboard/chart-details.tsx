"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Revenue } from "@/lib/definitions";
import { Calendar, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartDetails = ({ revenue }: { revenue: Revenue[] }) => {
  const chartData = revenue;
  return (
    <Card className="rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-sm">Recent Revenue</CardTitle>
        <CardDescription className="flex items-center">
          <Calendar className="text-muted-foreground size-3" />
          <h3 className="text-muted-foreground ml-2 text-xs">Last 12 months</h3>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return value.slice(0, 3);
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  indicator="line"
                  className="capitalize"
                />
              }
            />
            <Bar dataKey="revenue" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartDetails;
