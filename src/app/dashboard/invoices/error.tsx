"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong</h2>
      <Button className="" size="sm" onClick={() => reset()}>
        Try again
      </Button>
    </main>
  );
};

export default Error;
