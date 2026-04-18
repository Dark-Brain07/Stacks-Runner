// Last edited: 1668
import React, { useState } from 'react';
export const Component_168 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
