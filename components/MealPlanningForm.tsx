'use client'

import { useState } from 'react'
import { useMealPlanning } from '@/hooks/useMealPlanning'

export function MealPlanningForm() {
  const [newItem, setNewItem] = useState('')
  const { addItem, removeItem, items } = useMealPlanning()

  const handleAddItem = () => {
    if (newItem.trim()) {
      addItem(newItem.trim())
      setNewItem('')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item to bring"
          className="w-full px-3 py-2 border rounded"
        />
        <button
          onClick={handleAddItem}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Add Item
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

