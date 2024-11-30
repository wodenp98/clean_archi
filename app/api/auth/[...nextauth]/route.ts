import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { container } from "@/lib/container"

const authService = container.getAuthService()

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const user = await authService.validateUser(credentials.email, credentials.password)
        if (user) {
          return { id: user.id, email: user.email, name: user.name }
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }

