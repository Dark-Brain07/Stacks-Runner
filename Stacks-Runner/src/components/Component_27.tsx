// Last edited: 1027
import React, { useState } from 'react';
export const Component_27 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
