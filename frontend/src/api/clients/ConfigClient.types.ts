export interface ConfigClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface ConfigClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
