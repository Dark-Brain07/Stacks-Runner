export interface NotificationClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface NotificationClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
