// Last edited: 1093
import React, { useState } from 'react';
export const Component_93 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
