import { MealPlanningForm } from '@/components/MealPlanningForm'

export default function MealPlanningPage() {
  return (
    <div className="min-h-screen bg-red-100 text-green-800 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Meal Planning</h1>
      <MealPlanningForm />
    </div>
  )
}

