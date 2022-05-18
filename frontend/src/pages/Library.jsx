import LibraryContainer from '@/components/LibraryContainer';
import Menu from '@/components/Menu';
import { useState } from 'react';
function Library() {
  const [guideOpen, setGuideOpen] = useState(false);
  return (
    <main style={{ padding: '1rem 0' }}>
      <LibraryContainer />
      <Menu
        isGuideDialog={false}
        setGuideOpen={setGuideOpen}
        isWorld={true}
        placeBGM={'library'}
      />
    </main>
  );
}

export default Library;
