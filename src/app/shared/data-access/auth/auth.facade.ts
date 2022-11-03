import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../user/user.service';
import { authActions } from './+state/auth.actions';
import { authSelectors } from './+state/auth.selectors';
import { LoginCredentials } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  state$ = this.store.select(authSelectors.state);
  user$ = this.store.select(authSelectors.user);
  isLoggedIn$ = this.store.select(authSelectors.isLoggedIn);

  login(credentials: LoginCredentials) {
    const action = authActions.login({ credentials });
    this.store.dispatch(action);
  }

  logout() {
    const action = authActions.logout();
    this.store.dispatch(action);
  }

  setUser(user: User) {
    const action = authActions.setUser({ user });
    this.store.dispatch(action);
  }

  unsetUser() {
    const action = authActions.unsetUser();
    this.store.dispatch(action);
  }

  constructor(private store: Store) {}
}
