// Last edited: 1938
import React, { useState } from 'react';
export const Component_438 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
