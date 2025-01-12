import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { fetchExpenseById } from "@/services/expenseService";
import { fetchCategories } from "@/services/categoryService";
import EditOrDelete from "@/pages/expense/EditOrDelete";

export const Route = createFileRoute("/expenses/$expenseId")({
  component: ExpenseDetailComponent,
  loader: async ({ params }) => {
    const [expense, categories] = await Promise.all([
      fetchExpenseById(params.expenseId),
      fetchCategories(),
    ]);

    return { expense, categories };
  },
});
function ExpenseDetailComponent() {
  return <EditOrDelete />;
}
