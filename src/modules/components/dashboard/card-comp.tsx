import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Hourglass, Inbox, UsersRound } from "lucide-react";

const iconMap = {
  collected: Banknote,
  customers: UsersRound,
  pending: Hourglass,
  invoices: Inbox,
};

const CardComp = ({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) => {
  const Icon = iconMap[type];
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-start gap-2 p-4">
          {Icon ? <Icon className="text-muted-foreground size-4" /> : null}
          <h3 className="text-foreground/80 text-base">{title}</h3>
        </div>
        <p className="bg-primary/10 dark:bg-background/30 truncate rounded-xl px-4 py-2 text-center text-2xl">
          {value}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardComp;
