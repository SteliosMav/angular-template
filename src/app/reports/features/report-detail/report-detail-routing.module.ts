import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailPage } from './report-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReportDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportDetailRoutingModule {}
