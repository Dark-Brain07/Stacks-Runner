// Last edited: 932
import React, { useState } from 'react';
export const Component_432 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
