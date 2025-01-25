import { MinimalKeyword } from "./Keyword";

export type Category = {
  id: string;
  name: string;
}

export type CategoryWithKeywords = {
  id: number;
  name: string;
  associatedKeywords: MinimalKeyword[];
};

export type CategoryWithoutId = {
  name: string;
  associatedKeywords: MinimalKeyword[];
};
