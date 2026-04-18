export interface UserClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface UserClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
