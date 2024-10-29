'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import MainContent from '@/components/MainContent';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - replace with actual data fetching if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <MainContent />;
};
export default HomePage;