import PanoramaContainer from '@/components/PanoramaContainer';
import Menu from '@/components/Menu';
import { useState } from 'react';
export default function ObservationSpot() {
  const [guideOpen, setGuideOpen] = useState(false);
  return (
    <>
      <PanoramaContainer />
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'observatory-spot'}
      />
    </>
  );
}
