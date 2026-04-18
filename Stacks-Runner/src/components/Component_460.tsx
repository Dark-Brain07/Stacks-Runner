// Last edited: 960
import React, { useState } from 'react';
export const Component_460 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
