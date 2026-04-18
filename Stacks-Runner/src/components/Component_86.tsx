// Last edited: 586
import React, { useState } from 'react';
export const Component_86 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
