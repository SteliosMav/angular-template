import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ReportFilters, ReportQueryResult } from '../reports.service';

export const reportDashboardActions = createActionGroup({
  source: 'Report Dashboard',
  events: {
    'Load Reports': emptyProps(),
    'Load Reports Success': props<{ queryResult: ReportQueryResult }>(),
    'Load Reports Failure': props<{ error: Error }>(),
    'Set Filters': props<{ filters: ReportFilters }>(),
    'Set Search Query': props<{ search: string }>(),
    'Load More': emptyProps(),
    'Load More Success': props<{ queryResult: ReportQueryResult }>(),
    'Load More Failure': props<{ error: Error }>(),
    'Remove Report': props<{ id: string }>(),
    'Remove Report Success': props<{ id: string }>(),
    'Remove Report Failure': props<{ error: Error }>(),
  },
});
