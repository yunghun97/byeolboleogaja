import WorldContainer from '@/components/WorldContainer';

import GuideDialog from '@/components/GuideDialog';
import Menu from '@/components/Menu';
import { worldGuideInfos } from '@/constants';
import { useState, useEffect } from 'react';
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
      <GuideDialog
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
