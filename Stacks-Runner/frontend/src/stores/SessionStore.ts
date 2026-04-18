import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SessionStoreState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

interface SessionStoreActions {
  setLoading(v: boolean): void;
  setError(e: string | null): void;
  reset(): void;
  initialize(): Promise<void>;
}

const initial: SessionStoreState = { loading: false, error: null, initialized: false };

export const useSessionStore = create<SessionStoreState & SessionStoreActions>()(devtools(persist((set) => ({
  ...initial,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set(initial),
  initialize: async () => { set({ loading: true }); await new Promise(r => setTimeout(r, 100)); set({ initialized: true, loading: false }); },
}), { name: 'sessionstore' })));
