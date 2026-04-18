// Last edited: 77
import React, { useState } from 'react';
export const Component_77 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
