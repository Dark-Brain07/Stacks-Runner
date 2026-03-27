# Testing Guide
## Running Tests
npm test
## Test Structure
- Unit tests in __tests__/
- Tests use Vitest framework
- Mock localStorage with beforeEach(()=>localStorage.clear())
## Writing Tests
- One describe per module
- Test happy path and edge cases
- Use vi.fn() for spies
- Use vi.mock() for module mocks
## Coverage
npm run test -- --coverage