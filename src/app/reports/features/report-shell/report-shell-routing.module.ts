import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../report-dashboard/report-dashboard.module').then(
        (m) => m.ReportDashboardModule
      ),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('../report-editor/report-editor.module').then(
        (m) => m.ReportEditorModule
      ),
  },
  {
    path: 'editor/:id',
    loadChildren: () =>
      import('../report-editor/report-editor.module').then(
        (m) => m.ReportEditorModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../report-detail/report-detail.module').then(
        (m) => m.ReportDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportShellRoutingModule {}
