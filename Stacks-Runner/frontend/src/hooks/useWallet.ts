import { useState, useEffect, useCallback } from 'react';
import { connect, disconnect, isConnected } from '@stacks/connect';
interface WalletState { connected: boolean; address: string | null; connecting: boolean; error: string | null; }
export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>({ connected: false, address: null, connecting: false, error: null });
  useEffect(() => { const c = isConnected(); const a = localStorage.getItem('stx-address'); setWallet(p => ({ ...p, connected: c, address: a })); }, []);
  const connectWallet = useCallback(async () => {
    setWallet(p => ({ ...p, connecting: true, error: null }));
    try { const r = await connect(); if (r?.addresses) { const s = r.addresses.find((a: any) => a.symbol === 'STX');
      if (s) { localStorage.setItem('stx-address', s.address); setWallet({ connected: true, address: s.address, connecting: false, error: null }); return; } }
      setWallet(p => ({ ...p, connecting: false }));
    } catch (err: any) { setWallet(p => ({ ...p, connecting: false, error: err.message || 'Connection failed' })); }
  }, []);
  const disconnectWallet = useCallback(() => { disconnect(); localStorage.removeItem('stx-address'); setWallet({ connected: false, address: null, connecting: false, error: null }); }, []);
  return { ...wallet, connectWallet, disconnectWallet };
}