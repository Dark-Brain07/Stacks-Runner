import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface HistoryStoreState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

interface HistoryStoreActions {
  setLoading(v: boolean): void;
  setError(e: string | null): void;
  reset(): void;
  initialize(): Promise<void>;
}

const initial: HistoryStoreState = { loading: false, error: null, initialized: false };

export const useHistoryStore = create<HistoryStoreState & HistoryStoreActions>()(devtools(persist((set) => ({
  ...initial,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set(initial),
  initialize: async () => { set({ loading: true }); await new Promise(r => setTimeout(r, 100)); set({ initialized: true, loading: false }); },
}), { name: 'historystore' })));
