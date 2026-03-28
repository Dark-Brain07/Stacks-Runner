export interface AnalyticsClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface AnalyticsClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
