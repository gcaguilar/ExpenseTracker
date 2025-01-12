import React from "react";
import EditOrDelete from "@/pages/category/EditOrDelete";
import { fetchCategoriesById } from "@/services/categoryService";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories/$categoryId")({
  component: RouteComponent,
  loader: ({ params: { categoryId } }) =>
    fetchCategoriesById(categoryId),
});

function RouteComponent() {
  return <EditOrDelete />;
}
