// Last edited: 747
import React, { useState } from 'react';
export const Component_247 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
