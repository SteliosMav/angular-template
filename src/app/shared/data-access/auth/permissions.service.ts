import { Injectable } from '@angular/core';
import { createMongoAbility, MongoAbility } from '@casl/ability';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { User } from '../user/user.service';
import { authSelectors } from './+state/auth.selectors';
import { Permissions, Rule } from './permissions.types';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  userAbility$ = this.store
    .select(authSelectors.user)
    .pipe(map((user) => this.createAbility((user as User).rules as Rule[])));

  createAbility(rules: Rule[]): MongoAbility<Permissions> {
    return createMongoAbility<Permissions>(rules);
  }

  constructor(private store: Store) {}
}
