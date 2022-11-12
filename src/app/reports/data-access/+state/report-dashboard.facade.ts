import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, tap } from 'rxjs';
import { ReportFilters } from '../reports.service';
import { reportDashboardActions } from './report-dashboard.actions';
import { reportDashboardFeature } from './report-dashboard.reducer';

@Injectable({ providedIn: 'root' })
export class ReportDashboardFacade {
  effects$ = combineLatest([
    // Here you can add multiple observables that you want to
    // subscribe to as "effects" and the angular template will handle
    // the subscriptions for you.
    this.store.select(reportDashboardFeature.selectFetchingStatus),
  ]).pipe(
    map(([fetchingStatus]) => ({ fetchingStatus })),
    tap(
      ({ fetchingStatus }) =>
        fetchingStatus === 'PENDING' &&
        this.store.dispatch(reportDashboardActions.loadReports())
    )
  );

  viewModel$ = combineLatest([
    this.store.select(reportDashboardFeature.selectEntities),
    this.store.select(reportDashboardFeature.selectFetchingStatus),
    this.store.select(reportDashboardFeature.selectItemCount),
    combineLatest([
      this.store.select(reportDashboardFeature.selectFetchingStatus),
      this.store.select(reportDashboardFeature.selectItemCount),
    ]).pipe(
      map(([fetchingStatus, itemCount]) =>
        fetchingStatus === 'SUCCESS' && !itemCount ? false : true
      )
    ),
  ]).pipe(
    map(([reports, fetchingStatus, reportCount, foundResults]) => ({
      reports,
      fetchingStatus,
      reportCount,
      foundResults,
    }))
  );

  filter(filters: ReportFilters) {
    this.store.dispatch(reportDashboardActions.setFilters({ filters }));
  }

  loadMore() {
    this.store.dispatch(reportDashboardActions.loadMore());
  }

  removeReport(id: string) {
    this.store.dispatch(reportDashboardActions.removeReport({ id }));
  }
  constructor(private store: Store) {}
}
