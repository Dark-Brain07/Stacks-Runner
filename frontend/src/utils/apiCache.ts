export class ApiCache {
  private cache = new Map<string, { data: any; expiresAt: number }>();
  private ttl: number;
  constructor(ttl = 30000) { this.ttl = ttl; }
  get<T>(key: string): T | null { const e = this.cache.get(key); if (!e || Date.now() > e.expiresAt) { this.cache.delete(key); return null; } return e.data as T; }
  set<T>(key: string, data: T, ttl?: number): void { this.cache.set(key, { data, expiresAt: Date.now() + (ttl || this.ttl) }); }
  has(key: string): boolean { return this.get(key) !== null; }
  invalidate(key: string): void { this.cache.delete(key); }
  invalidateAll(): void { this.cache.clear(); }
  size(): number { return this.cache.size; }
}
export const apiCache = new ApiCache();