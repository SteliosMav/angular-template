import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/data-access/api/api.service';
import {
  ApiResponse,
  Pagination,
  QueryResult,
} from 'src/app/shared/data-access/api/api.models';
import { Report } from './report-editor.store';

export interface ReportFilters {
  isPublished: boolean;
}
export interface ReportQuery extends Pagination, ReportFilters {
  search: string;
}

export interface ReportQueryResult extends QueryResult<Report> {}

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  query(config: ReportQuery): Observable<ApiResponse<ReportQueryResult>> {
    // const params = new HttpParams({ fromObject: { ...config } });
    // return this.api.get<ReportQueryResult>('report-forms', params);
    const queryRes: ReportQueryResult = {
      entities: [Report.create(), Report.create()],
      itemCount: 2,
      offset: 0,
    };
    return this.api.mock(queryRes);
  }

  getReport(id: string): Observable<ApiResponse<Report>> {
    // return this.api.get<Report>('report-forms/' + id);
    return this.api.mock(Report.create());
  }

  addReport(report: Omit<Report, 'id'>): Observable<ApiResponse<Report>> {
    // return this.api.post<Report>('report-forms', report);
    return this.api.mock({ ...report, id: nanoid() });
  }

  editReport(
    report: Omit<Report, 'id'>,
    id: string
  ): Observable<ApiResponse<Report>> {
    // return this.api.patch<Report>('report-forms/' + id, report);
    return this.api.mock<Report>({ ...report, id: nanoid() });
  }

  removeReport(id: string): Observable<ApiResponse<string>> {
    // return this.api.delete<string>('report-forms/' + id);
    return this.api.mock(id, { throwError: true });
  }

  constructor(private api: ApiService) {}
}
