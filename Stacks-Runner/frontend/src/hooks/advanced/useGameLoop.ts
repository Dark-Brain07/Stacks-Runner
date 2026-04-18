import { useState, useCallback } from 'react';
export function useGameLoop<T>(init: T) {
  const [v, setV] = useState(init);
  const reset = useCallback(() => setV(init), [init]);
  return { value: v, set: setV, reset } as const;
}
