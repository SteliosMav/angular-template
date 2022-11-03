import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './+state/auth.actions';
import { authSelectors } from './+state/auth.selectors';
import { LoginCredentials } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  state$ = this.store.select(authSelectors.selectAuthState);
  user$ = this.store.select(authSelectors.selectUser);
  isLoggedIn$ = this.store.select(authSelectors.selectIsLoggedIn);

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
