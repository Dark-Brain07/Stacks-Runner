export interface FeedbackClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface FeedbackClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
