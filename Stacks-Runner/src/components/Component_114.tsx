// Last edited: 614
import React, { useState } from 'react';
export const Component_114 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
