import { Injectable } from '@angular/core';
import { mockApiResponse } from '../../utils/mock-api';
import { ApiService } from '../api/api.service';
import { User } from '../user/user.service';

export interface LoginCredentials {
  email: string;
  password: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  login(credentials: LoginCredentials) {
    return this.apiService.post<User>('auth/login', credentials);
  }

  logout() {
    return this.apiService.post('auth/logout');
  }

  authenticate() {
    // return mockApiResponse(new User());
    return this.apiService.get<User>('auth');
  }

  constructor(private apiService: ApiService) {}
}
