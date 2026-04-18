// Last edited: 1411
import React, { useState } from 'react';
export const Component_411 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
