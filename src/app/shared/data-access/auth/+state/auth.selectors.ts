import { createSelector } from '@ngrx/store';
import { fromRoot } from '../../root-store-config/root.reducer';

const state = (state: fromRoot.State) => state.auth;
const user = createSelector(state, (state) => state.user);
const isLoggedIn = createSelector(state, (state) => state.isLoggedIn);

export const authSelectors = {
  state,
  user,
  isLoggedIn,
};
