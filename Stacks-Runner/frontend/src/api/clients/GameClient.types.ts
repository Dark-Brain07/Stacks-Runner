export interface GameClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface GameClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
