import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDashboardPage } from './report-dashboard.page';
import { ReportDashboardRoutingModule } from './report-dashboard-routing.module';
import { SidebarFiltersModule } from '../../ui/sidebar-filters/sidebar-filters.module';
import { ReportListModule } from '../../ui/report-list/report-list.module';
import { DashboardHeaderModule } from '../../ui/dashboard-header/dashboard-header.module';

@NgModule({
  declarations: [ReportDashboardPage],
  imports: [
    CommonModule,
    ReportDashboardRoutingModule,

    // UI
    SidebarFiltersModule,
    ReportListModule,
    DashboardHeaderModule,
  ],
  exports: [ReportDashboardPage],
})
export class ReportDashboardModule {}
