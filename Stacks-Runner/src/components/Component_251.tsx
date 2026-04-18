// Last edited: 751
import React, { useState } from 'react';
export const Component_251 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
