import MuseumContainer from '@/components/MuseumContainer';
import MuseumDialog from '@/components/MuseumDialog';
import Menu from '@/components/Menu';
import { useState } from 'react';
import PropTypes from 'prop-types';
export default function Museum() {
  const [isOpen, setOpen] = useState(false);
  const [satellite, setSatellite] = useState({});
  const isGuideDialog = false;
  const isWorld = true;
  const placeBGM = 'museum';
  const [guideOpen, setGuideOpen] = useState(false);
  MuseumDialog.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    launchDate: PropTypes.array,
  };
  return (
    <main style={{ padding: '1rem 0' }}>
      <MuseumContainer setOpen={setOpen} setSatellite={setSatellite} />
      <MuseumDialog
        path="/react-prop-types"
        isOpen={isOpen}
        setOpen={setOpen}
        satellite={satellite}
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
