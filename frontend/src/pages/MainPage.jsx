import { useEffect } from 'react';
import { useStore } from '@/store';
import MainBackground from '@/components/MainBackground';
import MainContainer from '@/components/MainContainer';
import Footer from '@/components/Footer';
import { getApod } from '@/api/nasa';
import andromedaBg from '@/assets/img/loading/bg-loading-1.jpg';

export default function MainPage() {
  const $setApodUrl = useStore((state) => state.setApodUrl);

  useEffect(() => {
    initApodUrl();
  }, []);

  const initApodUrl = async () => {
    const res = await getApod();
    const img = new Image();
    img.src = res.data.url;
    img.onload = () => {
      $setApodUrl(res.data.url);
    };
    img.onerror = () => {
      $setApodUrl(andromedaBg);
    };
  };

  return (
    <>
      <MainBackground />
      <MainContainer />
      <Footer />
    </>
  );
}
