import { createFeature, createReducer, on } from '@ngrx/store';
import { RequestStatus } from 'src/app/shared/data-access/api/api.models';
import { ReportQuery, ReportQueryResult } from '../reports.service';
import { reportDashboardActions } from './report-dashboard.actions';

export interface ReportDashboardState extends ReportQueryResult, RequestStatus {
  query: ReportQuery;
}

const initialState: ReportDashboardState = {
  query: {
    page: 1,
    limit: 10,
    search: '',
    isPublished: false,
  },
  entities: [],
  itemCount: 0,
  offset: 0,
  message: '',
  fetchingStatus: 'PENDING',
  sendingStatus: 'PENDING',
};

export const reportDashboardFeature = createFeature({
  name: 'reportDashboard',
  reducer: createReducer(
    initialState,

    // Load Reports
    on(reportDashboardActions.loadReports, (state) => {
      const newState: ReportDashboardState = {
        ...state,
        fetchingStatus: 'LOADING',
        entities: [],
      };
      return newState;
    }),
    on(reportDashboardActions.loadReportsSuccess, (state, { queryResult }) => {
      const newState: ReportDashboardState = {
        ...state,
        query: { ...state.query, page: 1 },
        entities: queryResult.entities,
        itemCount: queryResult.itemCount,
        message: '',
        fetchingStatus: 'SUCCESS',
      };
      return newState;
    }),
    on(reportDashboardActions.loadReportsFailure, (state, { error }) => {
      const message = 'Something went wrong, please try again.';
      const newState: ReportDashboardState = {
        ...state,
        message,
        fetchingStatus: 'ERROR',
      };
      return newState;
    }),

    // Query Config
    on(reportDashboardActions.setFilters, (state, { filters }) => {
      const newState: ReportDashboardState = {
        ...state,
        query: {
          ...state.query,
          ...filters,
          page: 1,
        },
      };
      return newState;
    }),
    on(reportDashboardActions.setSearchQuery, (state, { search }) => {
      const newState: ReportDashboardState = {
        ...state,
        query: {
          ...state.query,
          search,
          page: 1,
        },
      };
      return newState;
    }),
    on(reportDashboardActions.loadMore, (state) => {
      const newState: ReportDashboardState = {
        ...state,
        fetchingStatus: 'LOADING',
        query: { ...state.query, page: state.query.page + 1 },
      };
      return newState;
    }),
    on(reportDashboardActions.loadMoreSuccess, (state, { queryResult }) => {
      const newState: ReportDashboardState = {
        ...state,
        ...queryResult,
        fetchingStatus: 'SUCCESS',
        entities: [...state.entities, ...queryResult.entities],
      };
      return newState;
    }),
    on(reportDashboardActions.loadMoreFailure, (state, { error }) => {
      const newState: ReportDashboardState = {
        ...state,
        fetchingStatus: 'ERROR',
      };
      return newState;
    })
  ),
});
