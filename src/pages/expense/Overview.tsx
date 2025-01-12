import { DataTable } from "@/components/DataTable";
import { columns } from "./components/Columns";
import { Expense } from "@/types/Expense";
import React from "react";
import { useLoaderData } from "@tanstack/react-router";

const Overview: React.FC = () => {
  const loaderData = useLoaderData<Expense[]>({ from: "/expenses/" });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={loaderData} />
    </div>
  );
};

export default Overview;
