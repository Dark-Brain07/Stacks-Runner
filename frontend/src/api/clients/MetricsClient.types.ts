export interface MetricsClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface MetricsClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
