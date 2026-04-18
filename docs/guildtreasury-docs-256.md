# GuildTreasury Documentation

## Overview
Enhanced documentation for the GuildTreasury module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { GuildTreasury } from './src/guildtreasury';
const instance = new GuildTreasury();
await instance.initialize();
```
