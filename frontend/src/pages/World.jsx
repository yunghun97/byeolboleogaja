import WorldContainer from '@/components/WorldContainer';
import GuideDialog from '@/components/GuideDialog';
import Menu from '@/components/Menu';
import { worldGuideInfos } from '@/constants';
import { useState, useEffect } from 'react';
export default function World() {
  const [isGuideDialog, setISGuideDialog] = useState(true);
  const [isWorld, setWorld] = useState(false);
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
        isGuideDialog={isGuideDialog}
        setGuideOpen={setGuideOpen}
        isWorld={isWorld}
      />
    </main>
  );
}
