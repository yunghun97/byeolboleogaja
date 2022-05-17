import ImageGallery from '@/components/ImageGallery';
import Menu from '@/components/Menu';
import { useState } from 'react';
export default function MuseumGallery() {
  const [isGuideDialog, setISGuideDialog] = useState(false);
  const [isWorld, setWorld] = useState(true);
  const [guideOpen, setGuideOpen] = useState(false);
  return (
    <main style={{ padding: '1rem 0' }}>
      <ImageGallery />
      <Menu
        isGuideDialog={isGuideDialog}
        setGuideOpen={setGuideOpen}
        isWorld={isWorld}
      />
    </main>
  );
}
