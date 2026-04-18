// Last edited: 1619
import { useMemo } from 'react';
export const Component_119 = ({ data }) => { const sum = useMemo(() => data.reduce((a, b) => a + b, 0), [data]); return <span>{sum}</span>; };
