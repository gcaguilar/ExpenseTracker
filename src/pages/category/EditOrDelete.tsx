import { CategoryWithKeywords } from "@/types/Category";
import { useLoaderData } from "@tanstack/react-router";
import React from "react";
import CategoryForm from "./components/CategoryForm";
import useCategoryForm from "@/hooks/useCategoryForm";
import { MinimalKeyword } from "@/types/Keyword";
const EditOrDeleteCategory: React.FC = () => {
  const { categories, keywords } = useLoaderData<{
    categories: CategoryWithKeywords[];
    keywords: MinimalKeyword[];
  }>({ from: "/categories/$categoryId" });

  const { onUpdateSubmit } = useCategoryForm(keywords, categories);
  return (
    <CategoryForm
      category={categories}
      keywords={keywords}
      onSubmit={onUpdateSubmit}
    />
  );
};

export default EditOrDeleteCategory;
