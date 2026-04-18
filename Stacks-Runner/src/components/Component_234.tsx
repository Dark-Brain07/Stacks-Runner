// Last edited: 1734
import React, { useState } from 'react';
export const Component_234 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
