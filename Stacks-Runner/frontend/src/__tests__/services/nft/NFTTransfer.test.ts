import { describe, it, expect } from 'vitest';
import { NFTTransfer } from '../../../services/nft/NFTTransfer';
describe('NFTTransfer', () => {
  it('initializes', () => { const s = new NFTTransfer(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTTransfer(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTTransfer(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
