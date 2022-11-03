import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginCredentials, User } from '../auth.service';

export const authActions = createActionGroup({
  source: '[Auth]',
  events: {
    Login: props<{ credentials: LoginCredentials }>(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: Error }>(),
    Logout: emptyProps(),
    'Logout Success': emptyProps(),
    'Logout Failure': emptyProps(),
    'Set User': props<{ user: User }>(),
    'Unset User': emptyProps(),
  },
});
