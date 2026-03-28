import { describe, it, expect } from 'vitest';
import { NFTAuction } from '../../../services/nft/NFTAuction';
describe('NFTAuction', () => {
  it('initializes', () => { const s = new NFTAuction(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTAuction(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTAuction(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
