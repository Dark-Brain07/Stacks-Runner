# Wallet Integration Guide
## Supported Wallets
- Leather (formerly Hiro Wallet)
- Xverse
## Connection Flow
1. User clicks Connect button
2. App calls @stacks/connect connect()
3. Wallet extension opens approval dialog
4. On approval, app receives STX address
5. Address stored in localStorage for persistence
## Score Submission
1. Game ends with final score
2. User clicks Submit Score
3. App creates contract-call transaction
4. Transaction sent to character-score contract
5. User approves in wallet
6. Score recorded on-chain
## Error Handling
- No wallet extension: show install prompt
- User rejects: show friendly message
- Transaction fails: allow retry with fee bump
