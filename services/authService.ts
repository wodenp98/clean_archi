import { IAuthService, User } from "@/interfaces/IAuthService"
import { IUserRepository } from "@/interfaces/IUserRepository"
import bcrypt from "bcryptjs"

export class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email)
    if (user && await bcrypt.compare(password, user.password)) {
      const { password: _, ...userWithoutPassword } = user
      return userWithoutPassword
    }
    return null
  }

  async registerUser(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.userRepository.create({ name, email, password: hashedPassword })
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
  }
}

