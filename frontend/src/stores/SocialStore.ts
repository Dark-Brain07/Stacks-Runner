import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SocialStoreState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

interface SocialStoreActions {
  setLoading(v: boolean): void;
  setError(e: string | null): void;
  reset(): void;
  initialize(): Promise<void>;
}

const initial: SocialStoreState = { loading: false, error: null, initialized: false };

export const useSocialStore = create<SocialStoreState & SocialStoreActions>()(devtools(persist((set) => ({
  ...initial,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set(initial),
  initialize: async () => { set({ loading: true }); await new Promise(r => setTimeout(r, 100)); set({ initialized: true, loading: false }); },
}), { name: 'socialstore' })));
