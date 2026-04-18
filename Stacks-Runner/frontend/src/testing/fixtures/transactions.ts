export const transactionsFixtures = {
  single: { id: '1', name: 'test-transactions', createdAt: Date.now() },
  list: Array.from({ length: 10 }, (_, i) => ({ id: String(i+1), name: `test-transactions-${i+1}`, createdAt: Date.now() - i * 86400000 })),
  empty: [],
};
