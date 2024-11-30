import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { LogoutButton } from '@/components/LogoutButton'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="min-h-screen bg-red-100 text-green-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Christmas Celebration Planner</h1>
      <nav className="flex justify-center space-x-4 mb-8">
        <Link href="/secret-santa" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Secret Santa
        </Link>
        <Link href="/meal-planning" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Meal Planning
        </Link>
        {!session && (
          <>
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
              Register
            </Link>
          </>
        )}
        {session && (
          <LogoutButton />
        )}
      </nav>
      {session && (
        <p className="text-center">Welcome, {session.user?.name}!</p>
      )}
    </main>
  )
}

