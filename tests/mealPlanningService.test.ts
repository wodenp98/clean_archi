import { mealPlanningService } from '@/services/mealPlanningService'

describe('MealPlanningService', () => {
  it('adds an item correctly', () => {
    const items = ['Turkey', 'Stuffing']
    const newItem = 'Cranberry Sauce'
    const updatedItems = mealPlanningService.addItem(items, newItem)

    expect(updatedItems).toEqual(['Turkey', 'Stuffing', 'Cranberry Sauce'])
  })

  it('removes an item correctly', () => {
    const items = ['Turkey', 'Stuffing', 'Cranberry Sauce']
    const updatedItems = mealPlanningService.removeItem(items, 1)

    expect(updatedItems).toEqual(['Turkey', 'Cranberry Sauce'])
  })
})

