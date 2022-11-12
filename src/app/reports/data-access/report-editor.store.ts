import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { RequestStatus } from 'src/app/shared/data-access/api/api.models';
import { authFeature } from 'src/app/shared/data-access/auth/+state/auth.reducer';
import { MessagesService } from 'src/app/shared/data-access/messages/messages.service';
import { reportDashboardActions } from './+state/report-dashboard.actions';
import { ReportsService } from './reports.service';

export class Report {
  id: string = '';
  title: string = '';
  description: string = '';
  isPublished: boolean = false;

  static create(overWriter: Partial<Report> = {}): Report {
    return { ...JSON.parse(JSON.stringify(new this())), ...overWriter };
  }
}

interface ReportEditorState extends RequestStatus {
  report: Report;
}

@Injectable()
export class ReportEditorStore extends ComponentStore<ReportEditorState> {
  readonly report$ = this.select((state) => state.report);
  readonly fetchingStatus$ = this.select((state) => state.fetchingStatus);
  readonly sendingStatus$ = this.select((state) => state.sendingStatus);

  loadReport = this.effect<string>((id$) =>
    id$.pipe(
      tap(() => this.patchState({ fetchingStatus: 'LOADING' })),
      switchMap((id) =>
        this.reportsService.getReport(id).pipe(
          tap({
            next: (res) =>
              this.patchState({ report: res.data, fetchingStatus: 'SUCCESS' }),
            error: () => this.patchState({ fetchingStatus: 'ERROR' }),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addReport = this.effect<Omit<Report, 'id'>>((formValue$) =>
    formValue$.pipe(
      tap(() => this.patchState({ sendingStatus: 'LOADING' })),
      switchMap((value) =>
        // Get current user's id for createdBy report property
        this.store.select(authFeature.selectUser).pipe(
          map((user) => ({ ...value })),
          switchMap((report) =>
            this.reportsService.addReport(report).pipe(
              tap({
                next: () =>
                  this.sendingSuccess('Report was submitted successfully!'),
                error: () =>
                  this.sendingFailure('Something went wrong, please try again'),
              }),
              catchError(() => EMPTY)
            )
          )
        )
      )
    )
  );

  editReport = this.effect<Omit<Report, 'id'>>((formValue$) =>
    formValue$.pipe(
      tap(() => this.patchState({ sendingStatus: 'LOADING' })),
      switchMap((value) =>
        // Get current user's id for createdBy report property
        this.store.select(authFeature.selectUser).pipe(
          take(1),
          map((user) => ({ ...value })),
          switchMap((report) =>
            this.reportsService
              .editReport(
                report,
                this.route.snapshot.paramMap.get('id') as string
              )
              .pipe(
                tap({
                  next: () =>
                    this.sendingSuccess('Report was updated successfully!'),
                  error: () =>
                    this.sendingFailure(
                      'Something went wrong, please try again'
                    ),
                }),
                catchError(() => EMPTY)
              )
          )
        )
      )
    )
  );

  removeReport = this.effect<string>((id$) =>
    id$.pipe(
      tap(() => this.patchState({ sendingStatus: 'LOADING' })),
      switchMap((id) =>
        this.reportsService.removeReport(id).pipe(
          tap({
            next: () => this.sendingSuccess('Report was removed successfully!'),
            error: () =>
              this.sendingFailure('Something went wrong, please try again'),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private reportsService: ReportsService,
    private store: Store,
    private router: Router,
    private messagesService: MessagesService,
    private route: ActivatedRoute
  ) {
    super({
      report: Report.create(),
      fetchingStatus: 'PENDING',
      sendingStatus: 'PENDING',
      message: '',
    });
  }

  private sendingSuccess(messageText: string) {
    this.patchState({ sendingStatus: 'SUCCESS' });
    this.messagesService.addMessage('SUCCESS', messageText);
    this.store.dispatch(reportDashboardActions.loadReports());
    this.router.navigateByUrl('/reports');
  }
  private sendingFailure(messageText: string) {
    this.patchState({ sendingStatus: 'ERROR' });
    this.messagesService.addMessage('ERROR', messageText);
  }
}
