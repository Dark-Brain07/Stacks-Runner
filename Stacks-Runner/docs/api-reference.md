# API Reference
## Utility Functions
### format.ts
- truncateAddress(address, chars?) - Truncate a Stacks address for display
- formatSTX(microStx, decimals?) - Convert microSTX to STX string
- formatNumber(num) - Format with locale separators
- formatScore(score) - Human readable score (1K, 1M)
- timeAgo(timestamp) - Relative time string
### validation.ts
- isValidStacksAddress(address) - Check Stacks address format
- isValidTxId(txId) - Check transaction ID format
- isValidContractId(contractId) - Check contract identifier
- isValidScore(score) - Validate score range
### math.ts
- clamp(value, min, max) - Constrain value to range
- lerp(start, end, t) - Linear interpolation
- randomInt(min, max) - Random integer in range
- distance(x1, y1, x2, y2) - 2D distance
### storage.ts
- getStorageItem(key, fallback) - Read from localStorage
- setStorageItem(key, value) - Write to localStorage
- removeStorageItem(key) - Delete from localStorage
## Hooks
- useLocalStorage(key, initialValue) - Persistent state
- useGameState(initial) - Game state machine
- useWallet() - Stacks wallet connection
