// Last edited: 1459
import React, { useState } from 'react';
export const Component_459 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
