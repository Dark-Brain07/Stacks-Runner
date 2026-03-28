export interface PaymentClientRequest {
  id?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface PaymentClientResponse<T = unknown> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
