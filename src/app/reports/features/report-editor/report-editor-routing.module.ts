import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportEditorPage } from './report-editor.page';

const routes: Routes = [
  {
    path: '',
    component: ReportEditorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportEditorRoutingModule {}
