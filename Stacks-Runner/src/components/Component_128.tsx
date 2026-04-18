// Last edited: 628
import React, { useState } from 'react';
export const Component_128 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
