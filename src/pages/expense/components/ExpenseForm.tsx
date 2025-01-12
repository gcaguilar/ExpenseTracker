import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormDateField from "@/components/FormDateField";
import { z } from "zod";
import { Category } from "@/types/Category";
import { Expense } from "@/types/Expense";
import React from "react";
import { ComboBoxItem } from "@/components/FormCombox";
import FormCombox from "@/components/FormCombox";
import { parseISO } from "date-fns";
import { getDefaultSingleExpense, singleExpenseSchema } from "../schemaValidation";
import FormInputField from "@/components/FormInputField";

interface ExpenseFormProps {
  expense?: Expense;
  categories: Category[];
  onSubmit: (values: z.infer<typeof singleExpenseSchema>) => void;
}

const transformAndSortCategories = (categories: Category[]): ComboBoxItem[] => {
  return categories
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((category) => ({
      value: category.id,
      label: category.name,
    }));
};

const transformDefaultExpense = (expense: Expense) => {
  return {
    id: expense.id,
    title: expense.name,
    amount: expense.amount,
    transactionDate: parseISO(expense.transactionDate),
    category: expense.category,
  };
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  expense,
  categories,
  onSubmit,
}) => {
  const form = useForm<z.infer<typeof singleExpenseSchema>>({
    resolver: zodResolver(singleExpenseSchema),
    defaultValues: expense
      ? transformDefaultExpense(expense)
      : getDefaultSingleExpense(),
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={`title`}
            render={({ field }) => (
              <FormInputField
                title="Titulo"
                type="text"
                field={field}
                placeholder={form.getValues(`title`)}
              />
            )}
          />
          <FormField
            control={form.control}
            name={`amount`}
            render={({ field }) => (
              <FormInputField
                title="Cantidad"
                type="number"
                field={field}
                placeholder={form.getValues(`amount`).toString()}
              />
            )}
          />
          <FormField
            control={form.control}
            name={`transactionDate`}
            render={({ field }) => (
              <FormDateField title="Fecha" field={field} />
            )}
          />
          <FormField
            control={form.control}
            name={`category`}
            render={({ field }) => (
              <FormCombox
                items={transformAndSortCategories(categories)}
                field={field}
              />
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default ExpenseForm;
