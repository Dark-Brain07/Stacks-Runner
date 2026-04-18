// Last edited: 1620
import React, { useState } from 'react';
export const Component_120 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
