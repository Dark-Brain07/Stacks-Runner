export interface LeaderboardClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface LeaderboardClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
