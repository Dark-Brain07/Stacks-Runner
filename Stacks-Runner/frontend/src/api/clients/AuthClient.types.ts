export interface AuthClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface AuthClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
