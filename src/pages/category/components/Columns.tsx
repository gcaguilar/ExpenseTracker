import React from "react";
import { Category } from "@/types/Category";
import { ColumnDef } from "@tanstack/react-table";
import { ActionsCell } from "@/components/ActionsCell";

const handleEdit = (id: string) => {
  // Lógica para editar la categoría con el ID proporcionado
  console.log(`Edit category with ID: ${id}`);
};

const handleDelete = (id: string) => {
  // Lógica para eliminar la categoría con el ID proporcionado
  console.log(`Delete category with ID: ${id}`);
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-right">Name</div>,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "Actions",
    header: () => null,
    cell: ({ row }) => (
      <ActionsCell 
        row={row} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    ),
  },
];
