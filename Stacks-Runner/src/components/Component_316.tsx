// Last edited: 1816
import React, { useState } from 'react';
export const Component_316 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
