// Last edited: 278
import React, { useState } from 'react';
export const Component_278 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
