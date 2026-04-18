// Last edited: 1923
import React, { useState } from 'react';
export const Component_423 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
