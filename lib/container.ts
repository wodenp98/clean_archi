import { PrismaClient } from '@prisma/client'
import { IAuthService } from '@/interfaces/IAuthService'
import { IUserRepository } from '@/interfaces/IUserRepository'
import { ISecretSantaService } from '@/interfaces/ISecretSantaService'
import { IMealPlanningService } from '@/interfaces/IMealPlanningService'
import { AuthService } from '@/services/authService'
import { UserRepository } from '@/repositories/userRepository'
import { SecretSantaService } from '@/services/secretSantaService'
import { MealPlanningService } from '@/services/mealPlanningService'

export class Container {
  private static instance: Container

  private prisma: PrismaClient
  private userRepository: IUserRepository
  private authService: IAuthService
  private secretSantaService: ISecretSantaService
  private mealPlanningService: IMealPlanningService

  private constructor() {
    this.prisma = new PrismaClient()
    this.userRepository = new UserRepository(this.prisma)
    this.authService = new AuthService(this.userRepository)
    this.secretSantaService = new SecretSantaService()
    this.mealPlanningService = new MealPlanningService()
  }

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container()
    }
    return Container.instance
  }

  getAuthService(): IAuthService {
    return this.authService
  }

  getUserRepository(): IUserRepository {
    return this.userRepository
  }

  getSecretSantaService(): ISecretSantaService {
    return this.secretSantaService
  }

  getMealPlanningService(): IMealPlanningService {
    return this.mealPlanningService
  }
}

export const container = Container.getInstance()

