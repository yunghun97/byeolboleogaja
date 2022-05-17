import WorldContainer from '@/components/WorldContainer';

import GuideDialog from '@/components/GuideDialog';
import Menu from '@/components/Menu';
import { worldGuideInfos } from '@/constants';
import { useState, useEffect } from 'react';
export default function World() {
  const [value, setValue] = useState(0.5);
  const isGuideDialog = true;
  const isWorld = false;
  const placeBGM = 'world';
  const [guideOpen, setGuideOpen] = useState(false);
  console.log(value);
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
        isGuideDialog={isGuideDialog}
        setGuideOpen={setGuideOpen}
        isWorld={isWorld}
        placeBGM={placeBGM}
      />
    </main>
  );
}
