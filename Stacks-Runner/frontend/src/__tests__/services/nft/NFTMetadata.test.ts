import { describe, it, expect } from 'vitest';
import { NFTMetadata } from '../../../services/nft/NFTMetadata';
describe('NFTMetadata', () => {
  it('initializes', () => { const s = new NFTMetadata(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTMetadata(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTMetadata(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
