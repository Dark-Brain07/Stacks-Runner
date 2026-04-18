// Last edited: 669
import { useMemo } from 'react';
export const Component_169 = ({ data }) => { const sum = useMemo(() => data.reduce((a, b) => a + b, 0), [data]); return <span>{sum}</span>; };
