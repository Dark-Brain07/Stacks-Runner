# Contributing to Stacks Runner - Advanced
## Architecture Decisions
Document major decisions in docs/ using the ADR format.
## Code Review Guidelines
- Focus on readability and maintainability
- Check for proper error handling
- Verify accessibility compliance
- Run tests before approving
## Release Process
1. Update CHANGELOG.md
2. Bump version in package.json
3. Create git tag
4. npm publish
5. Create GitHub release
## Performance Budgets
- Initial load: < 3s on 3G
- Bundle size: < 500KB gzipped
- FPS: > 50fps during gameplay
- Memory: < 100MB during gameplay
