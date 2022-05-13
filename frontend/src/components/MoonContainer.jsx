import 'aframe';
import ground from '@/assets/model/moon/mdl-moon-ground.glb?url';
import sky from '@/assets/img/moon/bg-moonsky.jpg?url';

const MoonContainer = () => {
  return (
    <>
      <a-scene>
        <a-assets>
          <img id="sky" src={sky} />
          <a-asset-item id="ground" src={ground}></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-gltf-model src="#ground" position="0 -5 0" rotation="0 -2 0" />
      </a-scene>
    </>
  );
};

export default MoonContainer;
