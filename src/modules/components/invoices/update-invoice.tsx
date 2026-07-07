"use client";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { PencilIcon } from "lucide-react";
import Link from "next/link";

const UpdateInvoice = ({ id }: { id: string }) => {
  return (
    <Link
      href={`${routes.invoices}/${id}/edit`}
      className={buttonVariants({ size: "sm", variant: "outline" })}
    >
      <PencilIcon />
    </Link>
  );
};

export default UpdateInvoice;
