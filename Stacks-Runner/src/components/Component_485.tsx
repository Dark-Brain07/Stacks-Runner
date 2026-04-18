// Last edited: 1485
import React, { useState } from 'react';
export const Component_485 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
