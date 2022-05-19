import ImageGallery from '@/components/ImageGallery';
import Menu from '@/components/Menu';
import { useState, useEffect } from 'react';
import LoadingScene from '@/components/LoadingScene';

export default function MuseumGallery() {
  const LOADING_TIME = 2000;
  const [isLoading, setIsLoading] = useState(true);
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), LOADING_TIME + 2000);
    }
  }, []);

  return (
    <>
      <ImageGallery />
      {isLoading ? (
        <LoadingScene loadingTime={LOADING_TIME} />
      ) : (
        <Menu
          isGuideDialog={false}
          setGuideOpen={setGuideOpen}
          isWorld={true}
          placeBGM={'gallery'}
        />
      )}
    </>
  );
}
