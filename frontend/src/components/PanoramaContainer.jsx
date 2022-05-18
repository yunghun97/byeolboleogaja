import 'aframe';
import imgAurora360 from '@/assets/img/observatory/img-aurora360-1.jpg'; // https://unsplash.com/photos/IuyhXAia8EA
import imgStar360 from '@/assets/img/observatory/img-star360-2.jpg'; // https://unsplash.com/photos/sWEx-5CoVUM

const PanoramaContainer = () => {
  return (
    <a-scene vr-mode-ui="enabled: false">
      <a-sky src={imgAurora360}></a-sky>
      <a-text
        font="kelsonsans"
        value="Talkeetna, Alaska"
        width="6"
        position="-2.5 0.25 -1.5"
        rotation="0 15 0"
      ></a-text>
    </a-scene>
  );
};

export default PanoramaContainer;
