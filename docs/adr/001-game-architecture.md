# ADR 001: Game Architecture
## Status: Accepted
## Context
Need a maintainable architecture for a browser-based game with blockchain integration.
## Decision
- Canvas-based rendering with requestAnimationFrame
- Component-based entity system
- Event-driven communication between systems
- localStorage for persistence
- Web Audio API for sound synthesis
## Consequences
- No external game framework dependency
- Full control over rendering pipeline
- Easy to extend with new game systems