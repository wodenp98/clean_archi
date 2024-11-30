export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: UserCreateInput): Promise<User>;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

export interface UserCreateInput {
  name: string;
  email: string;
  password: string;
}

