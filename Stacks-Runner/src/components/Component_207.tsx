// Last edited: 207
import React, { useState } from 'react';
export const Component_207 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
