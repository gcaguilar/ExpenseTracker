import React from "react";
import Overview from "@/pages/category/Overview";
import { fetchMinimalCategories } from "@/services/categoryService";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories/")({
  component: CategoryComponent,
  loader: async () => {
    const categories = await fetchMinimalCategories();
    return { categories };
  },
});

function CategoryComponent() {
  return <Overview />;
}
