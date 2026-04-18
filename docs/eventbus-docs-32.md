# EventBus Documentation

## Overview
Enhanced documentation for the EventBus module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { EventBus } from './src/eventbus';
const instance = new EventBus();
await instance.initialize();
```
