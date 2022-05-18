import { useState, useEffect } from 'react';
import WorldGuideDialog from '@/components/WorldGuideDialog';
import Menu from '@/components/Menu';
import WorldContainer from '@/components/WorldContainer';
import { worldGuideInfos } from '@/constants';

export default function World() {
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setGuideOpen(true);
    }, 3000);
  }, []);

  return (
    <main>
      <WorldContainer />
      <WorldGuideDialog
        guideInfos={worldGuideInfos}
        open={guideOpen}
        setOpen={setGuideOpen}
      />
      <Menu
        isGuideDialog={true}
        setGuideOpen={setGuideOpen}
        isWorld={false}
        placeBGM={'world'}
      />
    </main>
  );
}
