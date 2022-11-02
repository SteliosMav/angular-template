import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportEditorPage } from './report-editor.page';
import { ReportEditorRoutingModule } from './report-editor-routing.module';

@NgModule({
  declarations: [ReportEditorPage],
  imports: [CommonModule, ReportEditorRoutingModule],
  exports: [ReportEditorPage],
})
export class ReportEditorModule {}
