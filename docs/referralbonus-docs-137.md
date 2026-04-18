# ReferralBonus Documentation

## Overview
Enhanced documentation for the ReferralBonus module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { ReferralBonus } from './src/referralbonus';
const instance = new ReferralBonus();
await instance.initialize();
```
