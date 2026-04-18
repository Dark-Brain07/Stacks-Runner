# CraftingSystem Documentation

## Overview
Enhanced documentation for the CraftingSystem module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { CraftingSystem } from './src/craftingsystem';
const instance = new CraftingSystem();
await instance.initialize();
```
