// Last edited: 159
import React, { useState } from 'react';
export const Component_159 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
