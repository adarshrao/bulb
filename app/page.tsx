'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState('loading...');

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatus(data.status);
    };

    fetchStatus(); 
    // const interval = setInterval(fetchStatus, 5000); // fetch every 5 seconds

    // return () => clearInterval(interval); // clean up on component unmount
  }, []);

  return (
    <div className='bg-[#1D1E23] h-screen'>
      {status == 'open' ? <img className='py-32 mx-auto' src="../../present.png" alt="" /> : <></>}
      {status == 'closed' ? <img className='py-32 mx-auto' src="../../not_present.png" alt="" /> : <></>}

      {status}

    </div>
  );
}