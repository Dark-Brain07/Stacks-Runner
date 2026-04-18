// Last edited: 100
import React, { useEffect } from 'react';
export const Component_100 = () => { useEffect(() => { console.log('Mounted'); return () => console.log('Unmounted'); }, []); return <div/>; };
