import { useEffect, useState } from 'react';
import LoadingScene from '@/components/LoadingScene';
import MoonContainer from '@/components/MoonContainer';

import Menu from '@/components/Menu';

export default function Moon() {
  const LOADING_TIME = 2000;

  const [isLoading, setIsLoading] = useState(true);
  const [guideOpen, setGuideOpen] = useState(false);
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
        <>
          <MoonContainer />
        </>
      )}
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'moon'}
      />
    </>
  );
}
