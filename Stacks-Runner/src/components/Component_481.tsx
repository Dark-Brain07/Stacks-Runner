// Last edited: 1481
import { useMemo } from 'react';
export const Component_481 = ({ data }) => { const sum = useMemo(() => data.reduce((a, b) => a + b, 0), [data]); return <span>{sum}</span>; };
