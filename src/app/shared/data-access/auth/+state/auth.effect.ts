import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/data-access/auth/auth.service';
import { authActions } from './auth.actions';
import { of } from 'rxjs';
import { routerActions } from '../../router/+state/router.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map((res) => authActions.loginSuccess({ user: res.data })),
          catchError((error) => of(authActions.loginFailure({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logout),
      switchMap(() =>
        this.authService.logout().pipe(
          map((res) => authActions.logoutSuccess()),
          catchError(() => of(authActions.logoutFailure()))
        )
      )
    )
  );

  goToHomepage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginSuccess, authActions.logoutSuccess),
      map(() => routerActions.goToHomepage())
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
