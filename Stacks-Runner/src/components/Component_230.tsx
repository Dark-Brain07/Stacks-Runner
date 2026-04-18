// Last edited: 230
import React, { useState } from 'react';
export const Component_230 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
