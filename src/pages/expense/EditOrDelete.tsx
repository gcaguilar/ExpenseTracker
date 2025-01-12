import { Category } from "@/types/Category";
import ExpenseForm from "./components/ExpenseForm";
import { updateExpense } from "./SubmitExpense";
import React from "react";
import { useLoaderData } from "@tanstack/react-router";
import { Expense } from "@/types/Expense";

const EditOrDelete: React.FC = () => {
  const { expense, categories } = useLoaderData<{
    expense: Expense;
    categories: Category[];
  }>({ from: "/expenses/$expenseId" });

  return (
    <ExpenseForm
      expense={expense}
      categories={categories}
      onSubmit={updateExpense}
    />
  );
};

export default EditOrDelete;
