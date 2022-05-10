import WorldContainer from '@/components/WorldContainer';
import citykey from '@/assets/audio/bgm-citykey.mp3';

export default function World() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <audio src={citykey} autoPlay={true} loop={true}></audio>
      <WorldContainer />
    </main>
  );
}
