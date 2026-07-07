import { cn } from "@/lib/utils";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

const InvoiceBreadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={cn("flex text-xl md:text-lg")}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={cn(
                breadcrumb.active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              {index < breadcrumbs.length - 1 ? (
                <span className="mx-3 inline-block">/</span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default InvoiceBreadcrumbs;
