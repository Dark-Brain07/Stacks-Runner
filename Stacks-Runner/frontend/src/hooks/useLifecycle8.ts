import { useEffect } from 'react';
export const useLifecycle8 = (cb: () => void) => { useEffect(() => cb(), []); };

