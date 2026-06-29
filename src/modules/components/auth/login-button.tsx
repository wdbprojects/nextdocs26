"use client";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";

const LoginButton = ({
  variant = "outline",
  size = "sm",
  className,
}: {
  variant:
    | "outline"
    | "link"
    | "default"
    | "secondary"
    | "ghost"
    | "destructive";
  size: "default" | "xs" | "sm" | "lg" | "icon";
  className?: string;
}) => {
  return (
    <Link
      href={routes.login}
      className={cn(
        buttonVariants({
          size: size,
          variant: variant,
        }),
        className,
      )}
    >
      <LogIn className="size-3.5" />
      <span>Login</span>
    </Link>
  );
};

export default LoginButton;
