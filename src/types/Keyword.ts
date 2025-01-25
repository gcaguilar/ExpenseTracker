import { Category } from "./Category";

export type Keyword = {
  id: number;
  name: string;
  category: Category;
}

export type MinimalKeyword = {
  id: number;
  name: string;
}