# WalletConnect Documentation

## Overview
Enhanced documentation for the WalletConnect module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { WalletConnect } from './src/walletconnect';
const instance = new WalletConnect();
await instance.initialize();
```
