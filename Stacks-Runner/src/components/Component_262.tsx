// Last edited: 762
import React, { useState } from 'react';
export const Component_262 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
