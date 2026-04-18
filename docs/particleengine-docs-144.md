# ParticleEngine Documentation

## Overview
Enhanced documentation for the ParticleEngine module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { ParticleEngine } from './src/particleengine';
const instance = new ParticleEngine();
await instance.initialize();
```
