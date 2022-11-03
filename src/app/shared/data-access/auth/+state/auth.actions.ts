import { createAction, props } from '@ngrx/store';
import { User } from '../../user/user.service';
import { LoginCredentials } from '../auth.service';

const source = '[Auth] ';
const login = createAction(
  source + 'Login',
  props<{ credentials: LoginCredentials }>()
);
const loginSuccess = createAction(
  source + 'Login Success',
  props<{ user: User }>()
);
const loginFailure = createAction(
  source + 'Login Failure',
  props<{ error: Error }>()
);
const logout = createAction(source + 'Logout');
const logoutSuccess = createAction(source + 'Logout Success');
const logoutFailure = createAction(source + 'Logout Failure');
const setUser = createAction(source + 'Set User', props<{ user: User }>());
const unsetUser = createAction(source + 'Unset User');

export const authActions = {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
  setUser,
  unsetUser,
};
