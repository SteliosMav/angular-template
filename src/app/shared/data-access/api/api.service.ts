import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './api.models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  get<T>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.get<ApiResponse<T>>(`${this.api}/${path}`, {
      headers: this.headers,
      params,
      withCredentials: true,
    });
  }

  post<T>(path: string, data?: any): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.post<ApiResponse<T>>(
      `${this.api}/${path}`,
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
      `${this.api}/${path}`,
      JSON.stringify(data),
      {
        headers: this.headers,
        withCredentials: true,
      }
    );
  }

  delete<T = string>(path: string): Observable<ApiResponse<T>> {
    if (path.startsWith('/')) path = path.substring(1);
    return this.http.delete<ApiResponse<T>>(`${this.api}/${path}`, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  constructor(private http: HttpClient) {}

  private readonly api = environment.backend;
  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }
}
