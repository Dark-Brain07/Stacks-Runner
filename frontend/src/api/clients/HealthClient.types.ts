export interface HealthClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface HealthClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
