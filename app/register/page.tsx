import { RegisterForm } from '@/components/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-800">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}

