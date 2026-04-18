// Last edited: 249
import React, { useState } from 'react';
export const Component_249 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
