import 'aframe';
import ground from '@/assets/model/moon/mdl-moon-ground.glb?url';
import sky from '@/assets/img/moon/bg-moonsky.jpg?url';
import amongus from '@/assets/model/common/mdl-amongus.glb?url';
import flag from '@/assets/model/moon/mdl-flag.glb?url';
import rabbit from '@/assets/model/moon/mdl-rabbit.glb?url';
import PlanetDialog from '@/components/PlanetDialog';
import { moonInfos } from '@/constants';
import { useState, useEffect } from 'react';
const MoonContainer = () => {
  const [open, setOpen] = useState(true);
  const [isopen, setOpened] = useState(false);

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const rabbitNpcEl = sceneEl.querySelector('#rabbitNpc');

    rabbitNpcEl.addEventListener('click', function () {
      setOpened(true);
    });
  });

  return (
    <>
      <a-scene vr-mode-ui="enabled: false">
        <a-assets>
          <img id="sky" src={sky} />
          <a-asset-item id="ground" src={ground}></a-asset-item>
          <a-asset-item id="amongus" src={amongus}></a-asset-item>
          <a-asset-item id="flag" src={flag}></a-asset-item>
          <a-asset-item id="rabbit" src={rabbit}></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-gltf-model src="#ground" position="0 -5 0" rotation="0 -2 0" />
        <a-gltf-model src="#flag" position="5 -7 -27" scale="5 5 5" />
        <a-gltf-model
          id="rabbitNpc"
          class="clickable"
          src="#rabbit"
          position="0 -7 -25"
          scale="1 1 1"
          animation-mixer="clip : Take 001"
        />

        <a-camera position="0 7 0">
          <a-entity
            position="0 -5 0"
            rotation="0 180 0"
            cursor="rayOrigin: mouse;"
            raycaster="objects: .clickable"
          >
            <a-gltf-model src="#amongus" />
          </a-entity>
        </a-camera>
      </a-scene>
      <PlanetDialog planetInfos={moonInfos} open={isopen} setOpen={setOpened} />
    </>
  );
};

export default MoonContainer;
