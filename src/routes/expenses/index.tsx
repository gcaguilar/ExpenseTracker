import React from 'react'
import Overview from '@/pages/expense/Overview'
import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@/store/useStore'
import { fetchExpenses } from '@/services/expenseService'

export const Route = createFileRoute('/expenses/')({
  component: ExpenseIndexComponent,
  loader: () => fetchExpenses(),
})

function ExpenseIndexComponent() {
  return <Overview />
}
