import { useEffect, useState } from 'react';
import LoadingScene from '@/components/LoadingScene';
import WorldMapContainer from '../components/WorldMapContainer';

export default function WorldMap() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 5000);
    }
  }, []);

  return <>{isLoading ? <LoadingScene /> : <WorldMapContainer />}</>;
}
