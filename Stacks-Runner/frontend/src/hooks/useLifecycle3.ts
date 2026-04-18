import { useEffect } from 'react';
export const useLifecycle3 = (cb: () => void) => { useEffect(() => cb(), []); };

