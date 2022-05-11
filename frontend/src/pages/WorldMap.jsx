import { useEffect, useState } from 'react';
import LoadingScene from '@/components/LoadingScene';
import WorldMapContainer from '../components/WorldMapContainer';

export default function WorldMap() {
  const LOADING_TIME = 2000;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), LOADING_TIME + 1000);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScene loadingTime={LOADING_TIME} />
      ) : (
        <WorldMapContainer />
      )}
    </>
  );
}
