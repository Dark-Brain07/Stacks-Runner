// Last edited: 385
import React, { useState } from 'react';
export const Component_385 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
