import { createReducer, on } from '@ngrx/store';
import { serialize } from 'src/app/shared/utils/objects';
import { RequestStatus } from '../../api/api.models';
import { User } from '../../user/user.service';
import { authActions } from './auth.actions';

export interface AuthState extends RequestStatus {
  user: User;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: serialize(new User()),
  isLoggedIn: false,
  message: '',
  fetchingStatus: 'PENDING',
  sendingStatus: 'PENDING',
};

export const reducer = createReducer(
  initialState,

  // Login
  on(authActions.login, (state) => {
    const newState: AuthState = { ...state, fetchingStatus: 'LOADING' };
    return newState;
  }),
  on(authActions.loginSuccess, (state, { user }) => {
    const newState: AuthState = {
      ...state,
      isLoggedIn: true,
      user,
      fetchingStatus: 'SUCCESS',
    };
    return newState;
  }),
  on(authActions.loginFailure, (state, { error }) => {
    const message = 'Something went wrong, please try again.';
    const newState: AuthState = { ...state, message, fetchingStatus: 'ERROR' };
    return newState;
  }),

  // Logout
  on(authActions.logoutSuccess, (state) => {
    const newState: AuthState = {
      ...state,
      isLoggedIn: false,
      fetchingStatus: 'PENDING',
    };
    return newState;
  }),

  // Set User
  on(authActions.setUser, (state, { user }) => {
    const newState: AuthState = {
      ...state,
      isLoggedIn: true,
      user,
    };
    return newState;
  }),
  on(authActions.unsetUser, (state) => {
    const newState: AuthState = {
      ...state,
      isLoggedIn: false,
    };
    return newState;
  })
);

export const fromAuth = {
  initialState,
  reducer,
};
