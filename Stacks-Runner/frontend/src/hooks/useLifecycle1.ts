import { useEffect } from 'react';
export const useLifecycle1 = (cb: () => void) => { useEffect(() => cb(), []); };

