// Last edited: 1689
import React, { useState } from 'react';
export const Component_189 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
