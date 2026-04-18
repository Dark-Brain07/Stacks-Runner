import { describe, it, expect } from 'vitest';
import { NFTBidding } from '../../../services/nft/NFTBidding';
describe('NFTBidding', () => {
  it('initializes', () => { const s = new NFTBidding(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTBidding(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTBidding(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
