// Last edited: 1504
import React, { useEffect } from 'react';
export const Component_4 = () => { useEffect(() => { console.log('Mounted'); return () => console.log('Unmounted'); }, []); return <div/>; };
