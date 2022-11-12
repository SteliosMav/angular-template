import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { reportDashboardActions } from './report-dashboard.actions';
import { ReportsService } from '../reports.service';
import { Store } from '@ngrx/store';
import { MessagesService } from 'src/app/shared/data-access/messages/messages.service';
import { ReportDashboardFacade } from './report-dashboard.facade';
import { reportDashboardFeature } from './report-dashboard.reducer';

@Injectable()
export class ReportDashboardEffects {
  loadReports$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(reportDashboardActions.loadReports),
      concatLatestFrom(() =>
        this.store.select(reportDashboardFeature.selectQuery)
      ),
      concatMap(([_, config]) =>
        this.reportsService.query(config).pipe(
          map((res) =>
            reportDashboardActions.loadReportsSuccess({ queryResult: res.data })
          ),
          catchError((error) =>
            of(reportDashboardActions.loadReportsFailure({ error }))
          )
        )
      )
    );
  });

  loadMore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(reportDashboardActions.loadMore),
      concatLatestFrom(() =>
        this.store.select(reportDashboardFeature.selectQuery)
      ),
      concatMap(([_, config]) =>
        this.reportsService.query(config).pipe(
          map((res) =>
            reportDashboardActions.loadMoreSuccess({ queryResult: res.data })
          ),
          catchError((error) =>
            of(reportDashboardActions.loadMoreFailure({ error }))
          )
        )
      )
    );
  });

  removeReport$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(reportDashboardActions.removeReport),
      switchMap(({ id }) => this.reportsService.removeReport(id)),
      map((res) =>
        reportDashboardActions.removeReportSuccess({ id: res.data })
      ),
      catchError((error) =>
        of(reportDashboardActions.removeReportFailure({ error }))
      )
    );
  });

  reloadReports$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        reportDashboardActions.removeReportSuccess,
        reportDashboardActions.setFilters,
        reportDashboardActions.setSearchQuery
      ),
      map(() => reportDashboardActions.loadReports())
    );
  });

  throwErrorMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          reportDashboardActions.removeReportFailure,
          reportDashboardActions.loadReportsFailure,
          reportDashboardActions.loadMoreFailure
        ),
        tap(({ error }) =>
          this.messagesService.addMessage(
            'ERROR',
            error.message ? error.message : 'Error occurred! Please try again.'
          )
        )
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private reportDashboardFacade: ReportDashboardFacade,
    private store: Store,
    private reportsService: ReportsService,
    private messagesService: MessagesService
  ) {}
}
