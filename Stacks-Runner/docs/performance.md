# Performance Optimization Guide
## Bundle Size
- Use dynamic imports for heavy components
- Tree-shake unused utility exports
- Compress assets with gzip/brotli
## Runtime Performance
- Use requestAnimationFrame for game loop
- Object pooling for particles and bullets
- Avoid creating objects in hot paths
- Use typed arrays for particle data
## Canvas Optimization
- Minimize state changes (fill, stroke)
- Batch draw calls when possible
- Use offscreen canvas for static backgrounds
- Reduce overdraw with layer management
## Memory Management
- Clear event listeners on unmount
- Dispose of unused textures
- Monitor with Performance DevTools
- Use WeakRef for optional references
