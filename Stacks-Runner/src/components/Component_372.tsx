// Last edited: 372
import React, { useState } from 'react';
export const Component_372 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
