// Last edited: 793
import React, { useState } from 'react';
export const Component_293 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
