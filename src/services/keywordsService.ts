import { Keyword, MinimalKeyword } from "@/types/Keyword";

type DataKeywords = {
  data: Keyword[];
};

type DataMinimalKeywords = {
  data: MinimalKeyword[];
};

async function fetchMinimalKeywords(): Promise<MinimalKeyword[]> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}keywords?minimal=true`);
  console.log(response);
  const data: DataMinimalKeywords = await response.json();
  data.data.forEach((keyword) => {
    console.log(keyword);
  });
  return data.data;
}

async function fetchKeywords(): Promise<Keyword[]> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}keywords`);
  console.log(response);
  const data: DataKeywords = await response.json();
  return data.data;
}

async function fetchKeywordsByCategoryId(categoryId: string): Promise<Keyword[]> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}keywords/category/${categoryId}`);
  const data: DataKeywords = await response.json();
  return data.data;
}

export { fetchKeywords, fetchKeywordsByCategoryId, fetchMinimalKeywords };