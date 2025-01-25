import {
  Category,
  CategoryWithKeywords,
  CategoryWithoutId,
} from "@/types/Category";

type DataCategoryWithKeywords = {
  data: CategoryWithKeywords;
};

type DataCategoryListWithKeywords = {
  data: CategoryWithKeywords[];
};

type DataCategoryList = {
  data: Category[];
};

async function fetchCategoriesById(id: string): Promise<CategoryWithKeywords> {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}categories/${id}`,
  );
  const data: DataCategoryWithKeywords = await response.json();
  console.log("data", data);
  return data.data;
}

async function fetchCategories(): Promise<CategoryWithKeywords[]> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}categories`);
  const data: DataCategoryListWithKeywords = await response.json();
  return data.data;
}

async function fetchMinimalCategories(): Promise<Category[]> {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}categories?minimal=true`,
  );
  const data: DataCategoryList = await response.json();
  return data.data;
}

async function createCategory(
  category: CategoryWithoutId,
): Promise<CategoryWithKeywords> {
  const response = await fetch(`${import.meta.env.VITE_ASSET_URL}categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  return response.json();
}

async function updateCategory(
  category: CategoryWithKeywords,
): Promise<CategoryWithKeywords> {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}categories/${category.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    },
  );
  return response.json();
}

async function deleteCategory(id: string): Promise<void> {
  const response = await fetch(
    `${import.meta.env.VITE_ASSET_URL}categories/${id}`,
    {
      method: "DELETE",
    },
  );
  return response.json();
}

export {
  fetchCategories,
  fetchCategoriesById,
  createCategory,
  deleteCategory,
  updateCategory,
  fetchMinimalCategories,
};
