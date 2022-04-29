import { useEffect } from 'react';
import { useStore } from '@/store';
import MainBackground from '@/components/MainBackground';
import MainContainer from '@/components/MainContainer';
import { getApod } from '@/api/nasa';

export default function MainPage() {
  const $setApodUrl = useStore((state) => state.setApodUrl);

  useEffect(() => {
    initApodUrl();
  }, []);

  const initApodUrl = async () => {
    const res = await getApod();
    $setApodUrl(res.data.url);
  };

  return (
    <>
      <MainBackground />
      <MainContainer />
    </>
  );
}
