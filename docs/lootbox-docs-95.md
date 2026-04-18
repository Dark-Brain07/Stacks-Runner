# LootBox Documentation

## Overview
Enhanced documentation for the LootBox module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { LootBox } from './src/lootbox';
const instance = new LootBox();
await instance.initialize();
```
