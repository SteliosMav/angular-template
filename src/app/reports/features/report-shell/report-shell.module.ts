import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportShellRoutingModule } from './report-shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { reportDashboardFeature } from '../../data-access/+state/report-dashboard.reducer';

import { EffectsModule } from '@ngrx/effects';
import { ReportDashboardEffects } from '../../data-access/+state/report-dashboard.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportShellRoutingModule,

    // From data-access
    StoreModule.forFeature('reportDashboard', reportDashboardFeature.reducer),
    EffectsModule.forFeature([ReportDashboardEffects]),
  ],
})
export class ReportShellModule {}
