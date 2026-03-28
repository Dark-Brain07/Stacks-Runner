export interface InventoryClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface InventoryClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
