import { deleteInvoice } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

const DeleteInvoice = ({ id }: { id: string }) => {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button size="sm" variant="destructive" type="submit">
        <Trash2Icon />
      </Button>
    </form>
  );
};

export default DeleteInvoice;
