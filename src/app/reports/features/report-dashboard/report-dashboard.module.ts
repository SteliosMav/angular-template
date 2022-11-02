import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDashboardPage } from './report-dashboard.page';
import { ReportDashboardRoutingModule } from './report-dashboard-routing.module';

@NgModule({
  declarations: [ReportDashboardPage],
  imports: [CommonModule, ReportDashboardRoutingModule],
  exports: [ReportDashboardPage],
})
export class ReportDashboardModule {}
