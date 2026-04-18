// Last edited: 36
import React, { useState } from 'react';
export const Component_36 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
