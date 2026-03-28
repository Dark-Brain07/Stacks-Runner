import { describe, it, expect } from 'vitest';
import { NFTWatchlist } from '../../../services/nft/NFTWatchlist';
describe('NFTWatchlist', () => {
  it('initializes', () => { const s = new NFTWatchlist(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTWatchlist(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTWatchlist(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
