// Last edited: 643
import React, { useState } from 'react';
export const Component_143 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
