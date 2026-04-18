# Architecture Decision Records
## ADR-001: Use Phaser 3 for Game Engine
- Status: Accepted
- Context: Need a reliable 2D game engine with physics
- Decision: Use Phaser 3 via React wrapper
- Consequences: Good performance, large community, heavier bundle
## ADR-002: Local-First Leaderboard
- Status: Accepted
- Context: Need leaderboard without backend server
- Decision: Use localStorage with on-chain verification
- Consequences: Simple, works offline, limited to single device
## ADR-003: Feature Flags
- Status: Accepted
- Context: Need to roll out features gradually
- Decision: Simple feature flag module with localStorage override
- Consequences: Easy to toggle, no external service needed
