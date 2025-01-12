import { z } from "zod";
import { singleExpenseSchema } from "./schemaValidation";

export function submitExpense(values: z.infer<typeof singleExpenseSchema>) {
  const data = { data: values };
  const jsonData = JSON.stringify(data);
  fetch(`${import.meta.env.VITE_ASSET_URL}expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

export function updateExpense(values: z.infer<typeof singleExpenseSchema>) {
  const data = { data: values };
  const jsonData = JSON.stringify(data);
  fetch(`${import.meta.env.VITE_ASSET_URL}expenses/${values.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}