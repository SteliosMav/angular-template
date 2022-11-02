import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDetailPage } from './report-detail.page';
import { ReportDetailRoutingModule } from './report-detail-routing.module';

@NgModule({
  declarations: [ReportDetailPage],
  imports: [CommonModule, ReportDetailRoutingModule],
  exports: [ReportDetailPage],
})
export class ReportDetailModule {}
