import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth.actions';
import { LoginCredentials } from '../auth.service';
import { authFeature } from './auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  state$ = this.store.select(authFeature.selectAuthState);
  user$ = this.store.select(authFeature.selectUser);
  isLoggedIn$ = this.store.select(authFeature.selectIsLoggedIn);

  login(credentials: LoginCredentials) {
    const action = authActions.login({ credentials });
    this.store.dispatch(action);
  }

  logout() {
    const action = authActions.logout();
    this.store.dispatch(action);
  }

  constructor(private store: Store) {}
}
