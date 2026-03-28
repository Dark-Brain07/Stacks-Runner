export const questsFixtures = {
  single: { id: '1', name: 'test-quests', createdAt: Date.now() },
  list: Array.from({ length: 10 }, (_, i) => ({ id: String(i+1), name: `test-quests-${i+1}`, createdAt: Date.now() - i * 86400000 })),
  empty: [],
};
