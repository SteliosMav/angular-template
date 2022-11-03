export interface ApiResponse<T> {
  code?: number;
  message?: string;
  displayMessage?: string;
  data: T;
}

export interface RequestStatus {
  message: string;
  fetchingStatus: 'PENDING' | 'LOADING' | 'SUCCESS' | 'ERROR';
  sendingStatus: 'PENDING' | 'LOADING' | 'SUCCESS' | 'ERROR';
}

export interface Pagination {
  page: number;
  limit: number;
}

export interface QueryResult<T> {
  entities: T[];
  itemCount: number;
  offset: number;
}
