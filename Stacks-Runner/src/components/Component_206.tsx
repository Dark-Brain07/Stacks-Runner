// Last edited: 1706
import React, { useState } from 'react';
export const Component_206 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
