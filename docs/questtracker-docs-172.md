# QuestTracker Documentation

## Overview
Enhanced documentation for the QuestTracker module.

## API Reference

### Configuration
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enabled | boolean | true | Enable/disable module |
| timeout | number | 5000 | Request timeout in ms |

## Usage Example
```typescript
import { QuestTracker } from './src/questtracker';
const instance = new QuestTracker();
await instance.initialize();
```
