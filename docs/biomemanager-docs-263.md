# BiomeManager Documentation

## Overview
Enhanced documentation for the BiomeManager module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { BiomeManager } from './src/biomemanager';
const instance = new BiomeManager();
await instance.initialize();
```
