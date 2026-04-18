# NFTMinter Documentation

## Overview
Enhanced documentation for the NFTMinter module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { NFTMinter } from './src/nftminter';
const instance = new NFTMinter();
await instance.initialize();
```
