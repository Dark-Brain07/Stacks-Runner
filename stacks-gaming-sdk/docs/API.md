# API Reference

## Wallet Module
### WalletProvider
- `connect(): Promise<string>` — Connect wallet, returns STX address
- `disconnect(): void` — Disconnect current session
- `isConnected(): boolean` — Check connection status
- `getNetwork()` — Get current Stacks network
- `getAddress(): string | null` — Get connected address

### MultiWallet
- `detectWallets(): DetectedWallet[]` — Detect installed wallets
- `getPreferred(): WalletType | null` — Get preferred wallet

## Contracts Module
### ContractCaller
- `call(opts: CallOptions): Promise<TxResult>` — Execute contract call
- `readOnly(opts): Promise<ReadResult>` — Read-only contract call

### ScoreContract
- `submitScoreArgs(player, score, gameId)` — Build score submission args
- `getLeaderboardArgs(gameId, limit)` — Build leaderboard query args

### NFTContract
- `mintArgs(recipient, metadata)` — Build NFT mint args
- `transferArgs(tokenId, sender, recipient)` — Build transfer args

## Analytics Module
### PlayerAnalytics
- `recordGame(player, score)` — Record game result
- `getStats(player)` — Get player statistics
- `getLeaderboard(limit)` — Get top players

## Chainhooks Module
### ChainHookConfig
- `ftTransfer(url, apiKey, assetId)` — FT transfer hook config
- `nftEvent(url, apiKey)` — NFT event hook config
- `contractCall(url, apiKey)` — Contract call hook config

### WebhookHandler
- `register(type, handler)` — Register event handler
- `process(event)` — Process incoming webhook event
