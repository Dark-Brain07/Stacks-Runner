export const guildsFixtures = {
  single: { id: '1', name: 'test-guilds', createdAt: Date.now() },
  list: Array.from({ length: 10 }, (_, i) => ({ id: String(i+1), name: `test-guilds-${i+1}`, createdAt: Date.now() - i * 86400000 })),
  empty: [],
};
