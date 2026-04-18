// Last edited: 248
import React, { useState } from 'react';
export const Component_248 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
