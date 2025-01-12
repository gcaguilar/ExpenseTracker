import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import { submitExpense } from "./SubmitExpense";
import { useStore } from "@/store/useStore";

const CreateExpense: React.FC = () => {
  const { getCategories, isLoading, error } = useStore();
  const categories = getCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <ExpenseForm
      categories={categories}
      onSubmit={(values) => submitExpense(values)}
    />
  );
};

export default CreateExpense;
