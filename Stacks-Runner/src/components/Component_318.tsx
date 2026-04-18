// Last edited: 1818
import React, { useState } from 'react';
export const Component_318 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
