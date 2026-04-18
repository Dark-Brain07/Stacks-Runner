// Last edited: 1370
import React, { useState } from 'react';
export const Component_370 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
