import { useEffect } from 'react';
export const useLifecycle2 = (cb: () => void) => { useEffect(() => cb(), []); };

