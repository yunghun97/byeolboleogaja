import 'aframe';
import ground from '@/assets/model/moon/mdl-moon-ground.glb?url';
import sky from '@/assets/img/moon/bg-moonsky.jpg?url';

import flag from '@/assets/model/moon/mdl-flag.glb?url';
import rabbit from '@/assets/model/moon/mdl-rabbit.glb?url';
import PlanetDialog from '@/components/PlanetDialog';
import { moonInfos } from '@/constants';
import { useState, useEffect } from 'react';
import { useStore } from '@/store';
import QuizDialog from './QuizDialog';

const MoonContainer = () => {
  const [open, setOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const chracterColor = useStore((state) => state.chracterColor);

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const rabbitNpcEl = sceneEl.querySelector('#rabbitNpc');
    const player = sceneEl.querySelector('#player');

    document.addEventListener('keydown', function (event) {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowLeft' ||
        event.key === 'w' ||
        event.key === 'W' ||
        event.key === 'a' ||
        event.key === 'A' ||
        event.key === 's' ||
        event.key === 'S' ||
        event.key === 'd' ||
        event.key === 'D'
      ) {
        player.setAttribute('animation-mixer', {
          clip: 'walk',
          timeScale: 0.15,
        });
      }
    });

    document.addEventListener('keyup', function () {
      player.setAttribute('animation-mixer', { clip: 'base', timeScale: 0.15 });
    });

    rabbitNpcEl.addEventListener('click', function () {
      setOpen(true);
    });
  });

  return (
    <div>
      <a-scene vr-mode-ui="enabled: false">
        <a-assets>
          <img id="sky" src={sky} />
          <a-asset-item id="ground" src={ground}></a-asset-item>
          <a-asset-item id="amongus" src={chracterColor}></a-asset-item>
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
            id="player"
            scale="1.1 1.25 1.1"
            position="0 -8 -5"
            rotation="0 180 0"
            cursor="rayOrigin: mouse;"
            raycaster="objects: .clickable"
            animation-mixer="clip: base; timeScale: 0.15"
          >
            <a-gltf-model src="#amongus" />
          </a-entity>
        </a-camera>
      </a-scene>
      <PlanetDialog
        planetInfos={moonInfos}
        open={open}
        setOpen={setOpen}
        setQuizOpen={setQuizOpen}
      />
      <QuizDialog open={quizOpen} setOpen={setQuizOpen} />
    </div>
  );
};

export default MoonContainer;
