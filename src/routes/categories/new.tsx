import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Create from '@/pages/category/Create'
import { fetchMinimalKeywords } from '@/services/keywordsService'

export const Route = createFileRoute('/categories/new')({
  component: CreateCategoryComponent,
  loader: async () => {
    const keywords = await fetchMinimalKeywords()
    return { keywords }
  },
})

function CreateCategoryComponent() {
  return <Create />
}
