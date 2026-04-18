import { describe, it, expect } from 'vitest';
import { NFTMinter } from '../../../services/nft/NFTMinter';
describe('NFTMinter', () => {
  it('initializes', () => { const s = new NFTMinter(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTMinter(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTMinter(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
