"use client";

import { generatePagination } from "@/lib/utils";
import { PaginationArrow } from "@/modules/components/invoices/pagination-arrow";
import { PaginationNumber } from "@/modules/components/invoices/pagination-number";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        isDisabled={currentPage <= 1}
        href={createPageURL(currentPage - 1)}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          const href = page === "..." ? "" : createPageURL(page);

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={href}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default Pagination;
