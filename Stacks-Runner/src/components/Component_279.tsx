// Last edited: 279
import React, { useState } from 'react';
export const Component_279 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
