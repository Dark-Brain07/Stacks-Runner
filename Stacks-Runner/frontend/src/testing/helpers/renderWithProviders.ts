/**
 * renderWithProviders - Test helper utility
 */
export function renderWithProviders(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'renderWithProviders' };
}

export function renderWithProvidersWithDefaults() {
  return renderWithProviders({});
}
