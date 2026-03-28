export interface AchievementClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface AchievementClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
