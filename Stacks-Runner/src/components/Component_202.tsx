// Last edited: 202
import React, { useState } from 'react';
export const Component_202 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
