export const achievementsFixtures = {
  single: { id: '1', name: 'test-achievements', createdAt: Date.now() },
  list: Array.from({ length: 10 }, (_, i) => ({ id: String(i+1), name: `test-achievements-${i+1}`, createdAt: Date.now() - i * 86400000 })),
  empty: [],
};
