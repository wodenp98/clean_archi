export interface IAuthService {
  validateUser(email: string, password: string): Promise<User | null>;
  registerUser(name: string, email: string, password: string): Promise<User>;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

