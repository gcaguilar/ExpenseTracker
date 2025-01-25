import React from "react";
import { DataTable } from "@/components/DataTable";
import { columns } from "./components/Columns";
import { Category } from "@/types/Category";
import { useLoaderData } from "@tanstack/react-router";

const Overview: React.FC = () => {
   const { categories } = useLoaderData<{
    categories: Category[];
  }>({ from: "/categories/" });

  return <DataTable columns={columns} data={categories} />;
};

export default Overview;
