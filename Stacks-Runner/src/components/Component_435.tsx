// Last edited: 1935
import React, { useState } from 'react';
export const Component_435 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
