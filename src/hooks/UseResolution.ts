import { useEffect, useState } from 'react';

type Resolution = 'Mobile' | 'Desktop'

const UseResolution = () => {
  const [resolution, setResolution] = useState<Resolution>('Mobile');

  useEffect(() => {
    window.addEventListener('resize', calculateResolution);
    calculateResolution();
    return () => window.removeEventListener('resize', calculateResolution);
  }, []);

  const calculateResolution = () => {
    const isDesktop = window.innerWidth >= 992;
    setResolution(isDesktop ? 'Desktop' : 'Mobile');
  };

  return resolution;
};

export default UseResolution;
