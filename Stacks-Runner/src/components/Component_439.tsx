// Last edited: 1439
import React, { useState } from 'react';
export const Component_439 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
