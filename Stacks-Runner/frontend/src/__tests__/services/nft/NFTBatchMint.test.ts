import { describe, it, expect } from 'vitest';
import { NFTBatchMint } from '../../../services/nft/NFTBatchMint';
describe('NFTBatchMint', () => {
  it('initializes', () => { const s = new NFTBatchMint(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTBatchMint(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTBatchMint(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
