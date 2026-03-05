import React, { useState, useEffect } from 'react';
import { connect, disconnect, isConnected, getSelectedProviderId, request } from '@stacks/connect';

export const WalletConnect: React.FC = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [address, setAddress] = useState<string | null>(null);

    useEffect(() => {
        // Check if already connected on mount
        checkConnection();
    }, []);

    const checkConnection = () => {
        const connected = isConnected();
        setWalletConnected(connected);
        if (connected) {
            // Try to get the stored address from localStorage
            const storedAddr = localStorage.getItem('stx-address');
            if (storedAddr) setAddress(storedAddr);
        }
    };

    const connectWallet = async () => {
        try {
            const response = await connect();
            if (response && response.addresses) {
                const stxAddr = response.addresses.find(
                    (a: any) => a.symbol === 'STX'
                );
                if (stxAddr) {
                    setAddress(stxAddr.address);
                    localStorage.setItem('stx-address', stxAddr.address);
                }
            }
            setWalletConnected(true);
        } catch (e) {
            console.error('Wallet connect failed:', e);
            alert(
                'Could not connect wallet. Make sure you have the Leather or Xverse browser extension installed.'
            );
        }
    };

    const disconnectWallet = () => {
        disconnect();
        setWalletConnected(false);
        setAddress(null);
        localStorage.removeItem('stx-address');
    };

    if (walletConnected && address) {
        return (
            <div className="flex flex-col items-center space-y-2">
                <p className="text-sm font-semibold text-green-400">Connected</p>
                <p className="text-xs text-gray-400">
                    {address.substring(0, 8)}...{address.substring(address.length - 4)}
                </p>
                <button
                    onClick={disconnectWallet}
                    className="px-4 py-2 mt-2 text-sm font-bold text-white transition-colors border border-red-500 rounded hover:bg-red-500"
                >
                    Disconnect
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={connectWallet}
            className="px-6 py-3 font-bold text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
        >
            Connect Leather / Xverse
        </button>
    );
};

export { isConnected };
