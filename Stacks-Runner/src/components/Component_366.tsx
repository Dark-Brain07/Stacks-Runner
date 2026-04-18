// Last edited: 866
import React, { useState } from 'react';
export const Component_366 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
