import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export const ActionsCell = <T,>({
  row,
  onEdit,
  onDelete,
}: {
  row: Row<T>;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) => {

  const handleEdit = () => {
    onEdit(row.getValue("id"));
  };

  const handleDelete = () => {
    onDelete(row.getValue("id"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEdit}>Edit payment</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDelete}
        >
          Delete payment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
