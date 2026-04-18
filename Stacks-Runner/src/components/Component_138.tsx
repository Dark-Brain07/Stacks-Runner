// Last edited: 138
import React, { useState } from 'react';
export const Component_138 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
