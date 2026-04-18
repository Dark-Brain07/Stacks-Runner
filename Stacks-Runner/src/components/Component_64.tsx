// Last edited: 1064
import React, { useState } from 'react';
export const Component_64 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
