import { useState, useEffect } from 'react';
import { useStore } from '@/store';
import WorldGuideDialog from '@/components/WorldGuideDialog';
import Menu from '@/components/Menu';
import WorldContainer from '@/components/WorldContainer';
import { worldGuideInfos } from '@/constants';

export default function World() {
  const [guideOpen, setGuideOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const isSkip = useStore((state) => state.isSkip);

  useEffect(() => {
    if (isSkip == 0) {
      setTimeout(function () {
        setOpen(true);
      }, 3000);
    }
    if (isSkip === 1) {
      setOpen(false);
    }
  }, []);

  return (
    <main>
      <WorldContainer />
      <WorldGuideDialog
        guideInfos={worldGuideInfos}
        open={open}
        setOpen={setOpen}
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
