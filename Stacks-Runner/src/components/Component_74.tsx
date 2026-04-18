// Last edited: 1574
import React, { useState } from 'react';
export const Component_74 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
