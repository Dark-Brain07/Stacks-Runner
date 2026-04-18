export interface ReportClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface ReportClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
