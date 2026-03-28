import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ErrorStoreState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

interface ErrorStoreActions {
  setLoading(v: boolean): void;
  setError(e: string | null): void;
  reset(): void;
  initialize(): Promise<void>;
}

const initial: ErrorStoreState = { loading: false, error: null, initialized: false };

export const useErrorStore = create<ErrorStoreState & ErrorStoreActions>()(devtools(persist((set) => ({
  ...initial,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set(initial),
  initialize: async () => { set({ loading: true }); await new Promise(r => setTimeout(r, 100)); set({ initialized: true, loading: false }); },
}), { name: 'errorstore' })));
