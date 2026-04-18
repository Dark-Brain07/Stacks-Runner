// Last edited: 383
import React, { useState } from 'react';
export const Component_383 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
