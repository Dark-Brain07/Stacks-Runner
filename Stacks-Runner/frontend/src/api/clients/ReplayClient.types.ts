export interface ReplayClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface ReplayClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
