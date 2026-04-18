// Last edited: 764
import React, { useState } from 'react';
export const Component_264 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
