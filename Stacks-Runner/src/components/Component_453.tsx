// Last edited: 1953
import { useMemo } from 'react';
export const Component_453 = ({ data }) => { const sum = useMemo(() => data.reduce((a, b) => a + b, 0), [data]); return <span>{sum}</span>; };
