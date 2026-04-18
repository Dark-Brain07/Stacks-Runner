// Last edited: 1122
import React, { useState } from 'react';
export const Component_122 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
