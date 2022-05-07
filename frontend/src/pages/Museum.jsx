import MuseumContainer from '@/components/MuseumContainer';
import MuseumDialog from '../components/MuseumDialog';
import { useState } from 'react';
export default function Museum() {
  const [isOpen, setOpen] = useState(false);

  return (
    <main style={{ padding: '1rem 0' }}>
      <MuseumContainer isOpen={isOpen} setOpen={setOpen} />
      <MuseumDialog isOpen={isOpen} setOpen={setOpen} />
    </main>
  );
}
