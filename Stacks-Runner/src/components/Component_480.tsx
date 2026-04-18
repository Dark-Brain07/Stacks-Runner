// Last edited: 980
import React, { useState } from 'react';
export const Component_480 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
