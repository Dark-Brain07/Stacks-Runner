import { useEffect } from 'react';
export const useLifecycle5 = (cb: () => void) => { useEffect(() => cb(), []); };

