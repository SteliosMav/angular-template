import { authFeature } from './auth.reducer';

const {
  selectAuthState,
  selectIsLoggedIn,
  selectUser,
  selectMessage,
  selectSendingStatus,
} = authFeature;

export const authSelectors = {
  selectAuthState,
  selectIsLoggedIn,
  selectUser,
  selectMessage,
  selectSendingStatus,
};
