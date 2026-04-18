// Last edited: 681
import React, { useState } from 'react';
export const Component_181 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
