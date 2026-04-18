// Last edited: 1040
import React, { useState } from 'react';
export const Component_40 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
