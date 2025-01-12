import { Expense } from "@/types/Expense";

type DataExpense = {
  data: Expense[];
};

async function fetchExpenseById(id: string): Promise<Expense> {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}expenses/${id}`,
  );
  const data: DataExpense = await response.json();
  return data.data[0];
}

async function fetchExpenses(): Promise<Expense[]> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}expenses`);
  const data: DataExpense = await response.json();
  return data.data;
}

async function deleteExpense(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}expenses/${id}`,
    {
      method: "DELETE",
    },
  );
  return response;
}

export { fetchExpenses, fetchExpenseById, deleteExpense };
