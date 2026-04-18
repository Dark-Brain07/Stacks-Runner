// Last edited: 680
import React, { useState } from 'react';
export const Component_180 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
