import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutPage } from './home-layout.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutPage,
    children: [
      {
        path: 'reports',
        loadChildren: () =>
          import(
            '../../reports/features/report-shell/report-shell.module'
          ).then((m) => m.ReportShellModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLayoutRoutingModule {}
