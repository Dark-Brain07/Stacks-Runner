// Last edited: 1467
import React, { useState } from 'react';
export const Component_467 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
