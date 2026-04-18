// Last edited: 1654
import React, { useState } from 'react';
export const Component_154 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
