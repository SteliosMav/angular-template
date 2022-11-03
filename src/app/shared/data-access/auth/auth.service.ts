import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

export class User {
  id: string = 'string';
  email: string = 'string';
  name: string = 'string';

  static create(overWriter: Partial<User> = {}): User {
    return { ...JSON.parse(JSON.stringify(new this())), ...overWriter };
  }
}
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(credentials: LoginCredentials) {
    return this.api.post<User>('auth/login', credentials);
  }

  logout() {
    return this.api.post('auth/logout');
  }

  authenticate() {
    return this.api.get<User>('auth');
  }

  constructor(private api: ApiService) {}
}
