import React from "react";
import EditOrDelete from "@/pages/category/EditOrDelete";
import { fetchCategoriesById } from "@/services/categoryService";
import { createFileRoute } from "@tanstack/react-router";
import { fetchMinimalKeywords } from "@/services/keywordsService";

export const Route = createFileRoute("/categories/$categoryId")({
  component: RouteComponent,
  loader: async ({ params: { categoryId } }) => {
    const [categories, keywords] = await Promise.all([
      fetchCategoriesById(categoryId),
      fetchMinimalKeywords(),
    ]);
    return { categories, keywords };
  },
});

function RouteComponent() {
  return <EditOrDelete />;
}
