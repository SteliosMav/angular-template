/**
 * Using "createFeature" method from ngrx-store, creates automatically
 * selectors that can be accessed as shown:
 *   reportDashboardFeature.selectReportDashboardState
 *
 * The code below is how I used to create selectors.
 */

// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { ReportDashboardState } from './report-dashboard.reducer';

// const state = createFeatureSelector<ReportDashboardState>('reportDashboard');
// const reports = createSelector(state, (state) => state.entities);
// const reportCount = createSelector(state, (state) => state.itemCount);
// const fetchingStatus = createSelector(state, (state) => state.fetchingStatus);
// const message = createSelector(state, (state) => state.message);
// const queryConfig = createSelector(state, (state) => state.query);

// export const reportDashboardSelectors = {
//   // state,
//   reports,
//   reportCount,
//   fetchingStatus,
//   message,
//   queryConfig,
// };
