// Last edited: 1588
import React, { useState } from 'react';
export const Component_88 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
