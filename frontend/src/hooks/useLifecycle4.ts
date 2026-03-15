import { useEffect } from 'react';
export const useLifecycle4 = (cb: () => void) => { useEffect(() => cb(), []); };

