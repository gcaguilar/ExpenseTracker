import React from "react";
import { Category } from "@/types/Category";
import { ColumnDef } from "@tanstack/react-table";
import { ActionsCell } from "@/components/ActionsCell";
import { useNavigate } from "@tanstack/react-router";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-right">ID</div>,
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-right">Name</div>,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "Actions",
    header: () => null,
    cell: ({ row }) => {
      const navigate = useNavigate();
      const handleEdit = (categoryId: string) => {
        navigate({
          to: `/categories/${categoryId}`,
        });
      };

      const handleDelete = (categoryId: string) => {
        // Lógica para eliminar la categoría
        // Utilizar categoryId para eliminar la categoría
      };

      return (
        <ActionsCell 
          row={row} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      );
    },
  },
];

