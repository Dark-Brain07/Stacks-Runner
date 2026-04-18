// Last edited: 916
import React, { useState } from 'react';
export const Component_416 = () => { const [v, setV] = useState(false); return <div onClick={() => setV(!v)}>{v ? 'On' : 'Off'}</div>; };
