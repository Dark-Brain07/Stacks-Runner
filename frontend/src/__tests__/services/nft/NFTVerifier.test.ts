import { describe, it, expect } from 'vitest';
import { NFTVerifier } from '../../../services/nft/NFTVerifier';
describe('NFTVerifier', () => {
  it('initializes', () => { const s = new NFTVerifier(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTVerifier(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTVerifier(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
