import HoroscopeBackground from '@/components/HoroscopeBackground';
import HoroscopeContainer from '@/components/HoroscopeContainer';
import Menu from '@/components/Menu';
import { useState } from 'react';
export default function Horoscope() {
  const [guideOpen, setGuideOpen] = useState(false);
  return (
    <>
      <HoroscopeBackground />
      <HoroscopeContainer />
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'horoscope'}
      />
    </>
  );
}
