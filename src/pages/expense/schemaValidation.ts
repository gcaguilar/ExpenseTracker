import { z } from "zod";

const singleExpenseSchema = z.object({
  id: z.number(),
  title: z.string().min(2),
  amount: z.coerce.number(),
  transactionDate: z
    .date()
    .refine((date) => !isNaN(date.getTime()), "Invalid date"),
  category: z.number().nonnegative(),
});

const expenseListSchema = z.object({
  fields: z.array(singleExpenseSchema),
});

type ExpenseList = z.infer<typeof expenseListSchema>;

const getDefaultSingleExpense = () => ({
  id: -1,
  title: "",
  amount: 0,
  transactionDate: new Date(),
  category:-1,
});

export { getDefaultSingleExpense, expenseListSchema, singleExpenseSchema };
export type { ExpenseList };
