// Last edited: 456
import React, { useState } from 'react';
export const Component_456 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
