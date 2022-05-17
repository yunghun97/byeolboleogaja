import WorldContainer from '@/components/WorldContainer';
import citykey from '@/assets/audio/bgm-citykey.mp3';
import GuideDialog from '@/components/GuideDialog';
import Menu from '@/components/Menu';
import { worldGuideInfos } from '@/constants';
import { useState, useEffect } from 'react';
export default function World() {
  const [value, setValue] = useState(30);
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
      <audio id="soundVolume" src={citykey} autoPlay={true} loop={true}></audio>
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
        value={value}
        setValue={setValue}
      />
    </main>
  );
}
