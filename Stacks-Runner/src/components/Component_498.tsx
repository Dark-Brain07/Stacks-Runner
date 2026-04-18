// Last edited: 498
import React, { useState } from 'react';
export const Component_498 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
