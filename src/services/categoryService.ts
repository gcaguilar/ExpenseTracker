import { Category, CategoryWithKeywords, CategoryWithoutId } from "@/types/Category";

type DataCategoryWithKeywords = {
  data: CategoryWithKeywords[];
};

type DataCategory = {
  data: Category[];
};

async function fetchCategoriesById(id: string): Promise<CategoryWithKeywords> {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}categories/${id}`,
  );
  console.log(response);
  const data: DataCategoryWithKeywords = await response.json();
  console.log(data);
  console.log(data.data[0]);
  return data.data[0];
}

async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}categories`);
  const data: DataCategory = await response.json();
  return data.data;
}

async function addCategory(category: CategoryWithoutId): Promise<CategoryWithKeywords> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}categories`, {
    method: "POST",
    body: JSON.stringify(category),
  });
  return response.json();
}

async function updateCategory(category: CategoryWithKeywords): Promise<CategoryWithKeywords> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}categories/${category.id}`, {
    method: "PUT",
    body: JSON.stringify(category),
  });
  return response.json();
}

async function deleteCategory(id: string): Promise<void> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}categories/${id}`, {
    method: "DELETE",
  });
  return response.json();
}


export { fetchCategories, fetchCategoriesById, addCategory, deleteCategory, updateCategory };
