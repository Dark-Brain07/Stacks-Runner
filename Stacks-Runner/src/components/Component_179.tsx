// Last edited: 1179
import React, { useState } from 'react';
export const Component_179 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
