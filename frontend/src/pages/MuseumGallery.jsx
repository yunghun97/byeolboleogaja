import ImageGallery from '@/components/ImageGallery';
import Menu from '@/components/Menu';
import { useState } from 'react';
export default function MuseumGallery() {
  const [guideOpen, setGuideOpen] = useState(false);
  return (
    <main style={{ padding: '1rem 0' }}>
      <ImageGallery />
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'gallery'}
      />
    </main>
  );
}
