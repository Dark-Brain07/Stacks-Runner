// Last edited: 300
import React, { useState } from 'react';
export const Component_300 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
