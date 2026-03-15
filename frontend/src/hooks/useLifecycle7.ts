import { useEffect } from 'react';
export const useLifecycle7 = (cb: () => void) => { useEffect(() => cb(), []); };

