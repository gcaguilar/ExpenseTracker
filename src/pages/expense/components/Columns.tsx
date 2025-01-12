import React from "react";
import { Category } from "@/types/Category";
import { Expense } from "@/types/Expense";
import { ColumnDef } from "@tanstack/react-table";
import { ActionsCell } from "../../../components/ActionsCell";

export const columns: ColumnDef<Expense>[] = [
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
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseInt(row.getValue("amount")) * 100;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "transactionDate",
    header: () => <div className="text-right">Date</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("transactionDate")}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: () => <div className="text-right">Category</div>,
    cell: ({ row }) => {
      const category = row.getValue("category") as Category;
      return <div className="text-right font-medium">{category.name}</div>;
    },
  },
  {
    accessorKey: "Actions",
    header: () => null,
    cell: ({ row }) => <ActionsCell row={row} />
  },
];
