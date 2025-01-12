import { Category, CategoryWithKeywords } from "./Category";

export interface Expense {
  id: string;
  name: string;
  amount: number;
  transactionDate: string;
  category: Category;
}

export interface ExpenseWithTags {
  id: number;
  name: string;
  amount: number;
  transactionDate: string;
  category: CategoryWithKeywords;
}
