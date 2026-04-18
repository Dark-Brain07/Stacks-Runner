// Last edited: 121
import React, { useState } from 'react';
export const Component_121 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
