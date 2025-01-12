import { CategoryWithKeywords } from "@/types/Category";
import { useLoaderData } from "@tanstack/react-router";
import React from "react";
import CategoryForm from "./components/CategoryForm";
import { updateCategory } from "@/services/categoryService";

const EditOrDeleteCategory: React.FC = () => {
  const loaderData = useLoaderData<CategoryWithKeywords[]>({ from: "/categories/$categoryId" });

  return <CategoryForm category={loaderData} onSubmit={updateCategory} />;
};

export default EditOrDeleteCategory;
