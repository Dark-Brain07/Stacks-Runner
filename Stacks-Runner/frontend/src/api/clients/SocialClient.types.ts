export interface SocialClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface SocialClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
