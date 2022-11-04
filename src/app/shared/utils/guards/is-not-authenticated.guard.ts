import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { authActions } from '../../data-access/auth/+state/auth.actions';
import { AuthService, User } from '../../data-access/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsNotAuthenticatedGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authenticate().pipe(
      take(1),
      map(({ data }) => this.handleAthentication(data)),
      catchError((error) => of(this.handleAthentication()))
    );
  }

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  private handleAthentication(user: User | undefined = undefined) {
    if (user) {
      this.store.dispatch(authActions.setUser({ user }));
      return this.router.createUrlTree(['reports'], {});
    } else {
      this.store.dispatch(authActions.unsetUser());
      return true;
    }
  }
}
