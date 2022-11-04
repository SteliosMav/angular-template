import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from '../shared/utils/guards/is-authenticated.guard';
import { IsNotAuthenticatedGuard } from '../shared/utils/guards/is-not-authenticated.guard';

const routes: Routes = [
  // Authentication
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    canActivate: [IsNotAuthenticatedGuard],
    loadChildren: () =>
      import('../auth-layout/feature/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },

  // Home App
  {
    path: '',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('../home-layout/feature/home-layout.module').then(
        (m) => m.HomeLayoutModule
      ),
  },

  // Remains
  {
    path: 'error',
    canActivate: [],
    loadChildren: () =>
      import('../error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: 'page-not-found',
    canActivate: [],
    loadChildren: () =>
      import('../page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
