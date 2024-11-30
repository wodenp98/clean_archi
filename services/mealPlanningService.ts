import { IMealPlanningService } from "@/interfaces/IMealPlanningService"

export class MealPlanningService implements IMealPlanningService {
  addItem(items: string[], newItem: string): string[] {
    return [...items, newItem]
  }

  removeItem(items: string[], index: number): string[] {
    return items.filter((_, i) => i !== index)
  }
}

