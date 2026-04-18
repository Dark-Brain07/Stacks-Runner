# CharacterNFT Documentation

## Overview
Enhanced documentation for the CharacterNFT module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { CharacterNFT } from './src/characternft';
const instance = new CharacterNFT();
await instance.initialize();
```
