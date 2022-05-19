import MuseumContainer from '@/components/MuseumContainer';
import MuseumDialog from '@/components/MuseumDialog';
import Menu from '@/components/Menu';
import LoadingScene from '@/components/LoadingScene';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Museum() {
  const [isOpen, setOpen] = useState(false);
  const [satellite, setSatellite] = useState({});
  const [guideOpen, setGuideOpen] = useState(false);

  const LOADING_TIME = 500;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), LOADING_TIME + 1000);
    }
  }, []);

  MuseumDialog.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    launchDate: PropTypes.array,
  };
  return (
    <>
      {isLoading ? <LoadingScene loadingTime={LOADING_TIME} /> : <></>}
      <MuseumContainer
        setIsLoading={setIsLoading}
        setOpen={setOpen}
        setSatellite={setSatellite}
      />
      <MuseumDialog
        path="/react-prop-types"
        isOpen={isOpen}
        setOpen={setOpen}
        satellite={satellite}
      />
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'museum'}
      />
    </>
  );
}
