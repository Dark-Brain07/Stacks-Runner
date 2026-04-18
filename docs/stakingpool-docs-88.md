# StakingPool Documentation

## Overview
Enhanced documentation for the StakingPool module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { StakingPool } from './src/stakingpool';
const instance = new StakingPool();
await instance.initialize();
```
