// Last edited: 941
import React, { useState } from 'react';
export const Component_441 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
