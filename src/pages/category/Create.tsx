import { useLoaderData } from "@tanstack/react-router";
import React from "react";
import CategoryForm from "./components/CategoryForm";
import useCategoryForm from "@/hooks/useCategoryForm";
import { MinimalKeyword } from "@/types/Keyword";
const CreateCategory: React.FC = () => {
  const { keywords } = useLoaderData<{
    keywords: MinimalKeyword[];
  }>({ from: "/categories/new" });

  const { onCreateSubmit } = useCategoryForm(keywords);
  return (
    <CategoryForm
      category={undefined}
      keywords={keywords}
      onSubmit={onCreateSubmit}
    />
  );
};

export default CreateCategory;