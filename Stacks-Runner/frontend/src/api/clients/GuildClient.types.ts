export interface GuildClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface GuildClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
