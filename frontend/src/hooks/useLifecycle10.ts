import { useEffect } from 'react';
export const useLifecycle10 = (cb: () => void) => { useEffect(() => cb(), []); };

