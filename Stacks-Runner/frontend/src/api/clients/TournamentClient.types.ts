export interface TournamentClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface TournamentClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
