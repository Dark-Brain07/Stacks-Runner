import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CacheStoreState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

interface CacheStoreActions {
  setLoading(v: boolean): void;
  setError(e: string | null): void;
  reset(): void;
  initialize(): Promise<void>;
}

const initial: CacheStoreState = { loading: false, error: null, initialized: false };

export const useCacheStore = create<CacheStoreState & CacheStoreActions>()(devtools(persist((set) => ({
  ...initial,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set(initial),
  initialize: async () => { set({ loading: true }); await new Promise(r => setTimeout(r, 100)); set({ initialized: true, loading: false }); },
}), { name: 'cachestore' })));
