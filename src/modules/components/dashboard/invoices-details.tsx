"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LatestInvoice } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import { IterationCw } from "lucide-react";
import Image from "next/image";

const InvoicesDetails = ({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) => {
  return (
    <Card className="rounded-xl p-4">
      <CardHeader>
        <CardTitle>Latest Invoices</CardTitle>
        <CardDescription>January - June 2026</CardDescription>
      </CardHeader>
      <CardContent>
        {latestInvoices.map((invoice, index) => {
          return (
            <div
              key={invoice.id}
              className={cn("flex flex-row items-center justify-between py-4", {
                "border-t": index !== 0,
              })}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                </div>
              </div>
              <p className="truncate text-sm font-medium md:text-base">
                {invoice.amount}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter className="flex flex-row items-start gap-1 text-sm">
        <IterationCw className="h-5 w-5 text-gray-500" />
        <h3 className="ml-1 text-sm text-gray-500">Updated just now</h3>
      </CardFooter>
    </Card>
  );
};

export default InvoicesDetails;
