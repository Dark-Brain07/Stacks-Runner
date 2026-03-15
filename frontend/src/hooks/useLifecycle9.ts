import { useEffect } from 'react';
export const useLifecycle9 = (cb: () => void) => { useEffect(() => cb(), []); };

