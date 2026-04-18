export const replaysFixtures = {
  single: { id: '1', name: 'test-replays', createdAt: Date.now() },
  list: Array.from({ length: 10 }, (_, i) => ({ id: String(i+1), name: `test-replays-${i+1}`, createdAt: Date.now() - i * 86400000 })),
  empty: [],
};
