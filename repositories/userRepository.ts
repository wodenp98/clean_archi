import { PrismaClient } from '@prisma/client'
import { IUserRepository, User, UserCreateInput } from "@/interfaces/IUserRepository"

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } })
  }

  async create(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data })
  }
}

