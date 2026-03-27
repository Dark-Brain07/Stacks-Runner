export interface AppConfig { apiUrl: string; network: 'mainnet' | 'testnet'; maxRetries: number; txFeeMultiplier: number; }
export const DEFAULT_CONFIG: AppConfig = { apiUrl: 'https://api.hiro.so', network: 'mainnet', maxRetries: 3, txFeeMultiplier: 1.5 };
export function validateConfig(c: Partial<AppConfig>): { valid: boolean; errors: string[] } {
  const e: string[] = [];
  if (c.apiUrl && !c.apiUrl.startsWith('http')) e.push('apiUrl must start with http');
  if (c.network && !['mainnet', 'testnet'].includes(c.network)) e.push('invalid network');
  if (c.maxRetries !== undefined && (c.maxRetries < 0 || c.maxRetries > 10)) e.push('maxRetries must be 0-10');
  if (c.txFeeMultiplier !== undefined && c.txFeeMultiplier < 1) e.push('txFeeMultiplier must be >= 1');
  return { valid: e.length === 0, errors: e };
}
export function mergeConfig(o: Partial<AppConfig>): AppConfig { return { ...DEFAULT_CONFIG, ...o }; }