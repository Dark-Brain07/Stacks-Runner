// Last edited: 1582
import React, { useState } from 'react';
export const Component_82 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
