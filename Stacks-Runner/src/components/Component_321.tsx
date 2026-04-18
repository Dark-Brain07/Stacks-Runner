// Last edited: 321
import React, { useState } from 'react';
export const Component_321 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
