// Last edited: 1647
import { useMemo } from 'react';
export const Component_147 = ({ data }) => { const sum = useMemo(() => data.reduce((a, b) => a + b, 0), [data]); return <span>{sum}</span>; };
