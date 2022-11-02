import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Authentication
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('../auth-layout/feature/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },

  // Home App
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('../home-layout/feature/home-layout.module').then(
        (m) => m.HomeLayoutModule
      ),
  },

  // Rest
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
