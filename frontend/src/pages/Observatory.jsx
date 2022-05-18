import ObservatoryBackground from '@/components/ObservatoryBackground';
import ObservatoryContainer from '@/components/ObservatoryContainer';
import Menu from '@/components/Menu';
import { useState } from 'react';
export default function Observatory() {
  const [guideOpen, setGuideOpen] = useState(false);
  return (
    <>
      <ObservatoryBackground />
      <ObservatoryContainer />
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'observatory'}
      />
    </>
  );
}
