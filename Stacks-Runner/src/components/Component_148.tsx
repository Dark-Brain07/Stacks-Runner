// Last edited: 1148
import React, { useState } from 'react';
export const Component_148 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
