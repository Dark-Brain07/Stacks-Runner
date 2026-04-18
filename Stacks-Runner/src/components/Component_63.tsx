// Last edited: 63
import React, { useState } from 'react';
export const Component_63 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
