// Last edited: 756
import React, { useState } from 'react';
export const Component_256 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
