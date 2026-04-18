// Last edited: 931
import React, { useState } from 'react';
export const Component_431 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
