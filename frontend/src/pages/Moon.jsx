import { useEffect, useState } from 'react';
import LoadingScene from '@/components/LoadingScene';
import MoonContainer from '@/components/MoonContainer';

export default function Moon() {
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
        <MoonContainer />
      )}
    </>
  );
}
