import React from 'react' 
import Overview from '@/pages/category/Overview';
import { fetchCategories } from '@/services/categoryService'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/')({
  component: CategoryComponent,
  loader: () => fetchCategories(),
})

function CategoryComponent() {
  return <Overview />;
}
