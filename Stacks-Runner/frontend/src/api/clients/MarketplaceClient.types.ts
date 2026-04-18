export interface MarketplaceClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface MarketplaceClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
