// Last edited: 1719
import React, { useState } from 'react';
export const Component_219 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
