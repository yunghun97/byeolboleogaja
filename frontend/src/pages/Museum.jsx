import MuseumContainer from '@/components/MuseumContainer';
import MuseumDialog from '@/components/MuseumDialog';
import { useState } from 'react';
export default function Museum() {
  const [isOpen, setOpen] = useState(false);
  const [satellite, setSatellite] = useState({});
  return (
    <main style={{ padding: '1rem 0' }}>
      <MuseumContainer setOpen={setOpen} setSatellite={setSatellite} />
      <MuseumDialog isOpen={isOpen} setOpen={setOpen} satellite={satellite} />
    </main>
  );
}
