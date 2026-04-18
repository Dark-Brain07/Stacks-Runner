// Last edited: 838
import React, { useState } from 'react';
export const Component_338 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
