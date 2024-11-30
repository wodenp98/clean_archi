import { SecretSantaForm } from '@/components/SecretSantaForm'

export default function SecretSantaPage() {
  return (
    <div className="min-h-screen bg-red-100 text-green-800 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Secret Santa</h1>
      <SecretSantaForm />
    </div>
  )
}

