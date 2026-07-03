"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInvoice = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    if (!searchParams.has("page")) {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [pathname, searchParams, replace]);

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 shrink-0">
      <Input
        placeholder={placeholder}
        className="pl-8.5 placeholder:text-gray-500"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Search className="absolute top-1.5 left-3 size-4 text-gray-500" />
    </div>
  );
};

export default SearchInvoice;
