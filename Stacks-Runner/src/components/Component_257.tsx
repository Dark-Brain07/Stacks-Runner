// Last edited: 757
import React, { useState } from 'react';
export const Component_257 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
