# RewardVault Documentation

## Overview
Enhanced documentation for the RewardVault module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { RewardVault } from './src/rewardvault';
const instance = new RewardVault();
await instance.initialize();
```
