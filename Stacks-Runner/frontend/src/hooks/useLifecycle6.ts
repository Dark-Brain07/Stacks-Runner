import { useEffect } from 'react';
export const useLifecycle6 = (cb: () => void) => { useEffect(() => cb(), []); };

