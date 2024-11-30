export interface IMealPlanningService {
  addItem(items: string[], newItem: string): string[];
  removeItem(items: string[], index: number): string[];
}

