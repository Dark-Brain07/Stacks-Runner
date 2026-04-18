// Last edited: 297
import React, { useState } from 'react';
export const Component_297 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
