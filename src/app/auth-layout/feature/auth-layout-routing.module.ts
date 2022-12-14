import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutPage } from './auth-layout.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutPage,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../../login/feature/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../../register/feature/register.module').then(
            (m) => m.RegisterModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
