// Last edited: 124
import React, { useState } from 'react';
export const Component_124 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
