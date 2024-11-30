import { useState } from 'react'
import { container } from '@/lib/container'

const mealPlanningService = container.getMealPlanningService()

export function useMealPlanning() {
  const [items, setItems] = useState<string[]>([])

  const addItem = (item: string) => {
    const updatedItems = mealPlanningService.addItem(items, item)
    setItems(updatedItems)
  }

  const removeItem = (index: number) => {
    const updatedItems = mealPlanningService.removeItem(items, index)
    setItems(updatedItems)
  }

  return { addItem, removeItem, items }
}

