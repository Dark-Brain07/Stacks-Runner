// Last edited: 1735
import { useMemo } from 'react';
export const Component_235 = ({ data }) => { const sum = useMemo(() => data.reduce((a, b) => a + b, 0), [data]); return <span>{sum}</span>; };
