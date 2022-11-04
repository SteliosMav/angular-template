import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { delay, Observable, of, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './api.models';
import { clone } from '../../utils/general';

interface MockResponseConfig {
  code: number;
  message: string;
  displayMessage?: string;
  throwError: boolean;
  delationTime: number;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  get<T>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.get<ApiResponse<T>>(`${environment.backend}/${path}`, {
      headers: this.headers,
      params,
      withCredentials: true,
    });
  }

  post<T>(path: string, data?: any): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.post<ApiResponse<T>>(
      `${environment.backend}/${path}`,
      JSON.stringify(data),
      {
        headers: this.headers,
        withCredentials: true,
      }
    );
  }

  patch<T>(path: string, data: any): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.patch<ApiResponse<T>>(
      `${environment.backend}/${path}`,
      JSON.stringify(data),
      {
        headers: this.headers,
        withCredentials: true,
      }
    );
  }

  delete<T = string>(path: string): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.delete<ApiResponse<T>>(`${environment.backend}/${path}`, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  mock<T = any>(
    data: T,
    config: Partial<MockResponseConfig> = {}
  ): Observable<ApiResponse<T>> {
    let initValues: MockResponseConfig = {
      code: 400,
      message: 'success',
      displayMessage: undefined,
      throwError: false,
      delationTime: 1200,
    };
    initValues = { ...initValues, ...config };
    const { code, message, displayMessage, throwError, delationTime } =
      initValues;
    const response: ApiResponse<T> = {
      code,
      message,
      displayMessage,
      data: clone(data),
    };
    return of(response).pipe(
      take(1),
      delay(delationTime),
      tap(() => {
        if (throwError)
          throw JSON.parse(JSON.stringify(new Error(displayMessage)));
      })
    );
  }

  constructor(private http: HttpClient) {}

  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }
}
