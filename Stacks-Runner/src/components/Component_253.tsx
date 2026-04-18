// Last edited: 753
import React, { useState } from 'react';
export const Component_253 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
