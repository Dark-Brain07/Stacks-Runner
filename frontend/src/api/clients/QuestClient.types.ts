export interface QuestClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface QuestClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
