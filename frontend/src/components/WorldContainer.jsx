import { useState, useEffect } from 'react';

import 'aframe';
import sky from '@/assets/img/world/bg-world.jpg?url';
import ground from '@/assets/model/world/mdl-ground.glb?url';
import library from '@/assets/model/world/mdl-library.glb?url';
import observatory from '@/assets/model/world/mdl-observatory.glb?url';
import spaceship from '@/assets/model/world/mdl-spaceship.glb?url';
import museum from '@/assets/model/world/mdl-museum.glb?url';
import satellite from '@/assets/model/world/mdl-satellite.glb?url';
import witchHouse from '@/assets/model/world/mdl-witchhouse.glb?url';
import observatoryNpc from '@/assets/model/world/mdl-npc-1.glb?url';
import libraryNpc from '@/assets/model/world/mdl-npc-2.glb?url';
import museumNpc from '@/assets/model/world/mdl-npc-3.glb?url';
import spaceshipNpc from '@/assets/model/world/mdl-npc-4.glb?url';
import horoscopeNpc from '@/assets/model/world/mdl-npc-5.glb?url';
import exclamationMark from '@/assets/model/world/mdl-exclamation-mark.glb?url';

import ChatWindow from '@/components/ChatWindow';
import BuildingDialog from '@/components/BuildingDialog';

import {
  observatoryIntro,
  libraryIntro,
  museumIntro,
  spaceshipIntro,
  horoscopeIntro,
} from '@/constants';

import { useStore } from '@/store';
import { Box } from '@mui/material';

const WorldContainer = () => {
  const chracterColor = useStore((state) => state.chracterColor);

  const [open, setOpen] = useState(true);
  const [isopen, setOpened] = useState(false);
  const [info, setInfo] = useState(observatoryIntro);
  const [Building, setBuilding] = useState('');

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const observatory = sceneEl.querySelector('#observatoryNpc-model');
    const library = sceneEl.querySelector('#libraryNpc-model');
    const museum = sceneEl.querySelector('#museumNpc-model');
    const spaceship = sceneEl.querySelector('#spaceshipNpc-model');
    const horoscope = sceneEl.querySelector('#horoscopeNpc-model');
    const player = sceneEl.querySelector('#player');
    const keys = [];

    document.addEventListener('DOMContentLoaded', function () {
      sceneEl.addEventListener('loaded', function () {
        console.log('로딩됨!');
      });
    });

    const walk = () => {
      if (
        keys['ArrowUp'] ||
        keys['ArrowDown'] ||
        keys['ArrowRight'] ||
        keys['ArrowLeft'] ||
        keys['KeyW'] ||
        keys['KeyS'] ||
        keys['KeyA'] ||
        keys['KeyD']
      ) {
        player.setAttribute('animation-mixer', { clip: 'walk' });
      } else {
        player.setAttribute('animation-mixer', { clip: 'base' });
      }
    };

    document.addEventListener('keydown', function (e) {
      keys[e.code] = true;
      walk();
    });

    document.addEventListener('keyup', function (e) {
      delete keys[e.code];
      walk();
    });

    observatory.addEventListener('click', function () {
      setOpened(true);
      setInfo(observatoryIntro);
      setBuilding('observatory');
    });
    library.addEventListener('click', function () {
      setOpened(true);
      setInfo(libraryIntro);
      setBuilding('library');
    });
    museum.addEventListener('click', function () {
      setOpened(true);
      setInfo(museumIntro);
      setBuilding('museum');
    });
    spaceship.addEventListener('click', function () {
      setOpened(true);
      setInfo(spaceshipIntro);
      setBuilding('spaceship');
    });
    horoscope.addEventListener('click', function () {
      setOpened(true);
      setInfo(horoscopeIntro);
      setBuilding('horoscope');
    });
  });

  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        loading-screen="dotsColor: white; backgroundColor: black"
        shadow="type: pcfsoft"
      >
        <a-assets>
          <img id="sky" src={sky} />
          <a-asset-item id="ground" src={ground}></a-asset-item>
          <a-asset-item id="library" src={library}></a-asset-item>
          <a-asset-item id="observatory" src={observatory}></a-asset-item>
          <a-asset-item id="spaceship" src={spaceship}></a-asset-item>
          <a-asset-item id="museum" src={museum}></a-asset-item>
          <a-asset-item id="satellite" src={satellite}></a-asset-item>
          <a-asset-item id="witch-house" src={witchHouse}></a-asset-item>
          <a-asset-item id="amongus" src={chracterColor}></a-asset-item>
          <a-asset-item id="libraryNpc" src={libraryNpc}></a-asset-item>
          <a-asset-item id="observatoryNpc" src={observatoryNpc}></a-asset-item>
          <a-asset-item id="museumNpc" src={museumNpc}></a-asset-item>
          <a-asset-item id="spaceshipNpc" src={spaceshipNpc}></a-asset-item>
          <a-asset-item id="horoscopeNpc" src={horoscopeNpc}></a-asset-item>
          <a-asset-item
            id="exclamationMark"
            src={exclamationMark}
          ></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-entity
          position="0 600 0"
          light="type:point;
          intensity: 1.3;
          castShadow:true;
          shadowCameraFar:800"
        ></a-entity>
        <a-entity
          position="0 600 -400"
          light="type:point;
          intensity: 1.3;
          castShadow:true;
          shadowCameraFar:800"
        ></a-entity>
        <a-gltf-model
          src="#ground"
          position="0 -5 0"
          rotation="0 -2 0"
          shadow="cast: false; receive: true"
        />
        <a-gltf-model
          id="library-model"
          src="#library"
          shadow="cast: true; receive: false"
          position="82.276 14.178 -183"
          rotation="0 90 0"
        />
        <a-gltf-model
          id="observatory-model"
          src="#observatory"
          scale="120 120 120"
          shadow="cast: true; receive: false"
          position="41.511 29 -56.011"
          rotation="0 90 0"
        />
        <a-gltf-model
          id="spaceship-model"
          src="#spaceship"
          shadow="cast: true; receive: false"
          scale="100 100 100"
          position="-85 -2 -200"
          rotation="0 140 0"
        />
        <a-gltf-model
          id="museum-model"
          src="#museum"
          shadow="cast: true; receive: false"
          scale="2.3 2.3 2.3"
          position="-54.671 -1.3 -86.823"
        />
        <a-gltf-model
          id="satellite-model"
          src="#satellite"
          shadow="cast: true; receive: false"
          scale="100 100 100"
          position="-69.931 45.263 -98.965"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
        />
        <a-gltf-model
          id="witch-house-model"
          src="#witch-house"
          shadow="cast: true; receive: false"
          scale="0.3 0.3 0.3"
          position="-60 15.925 -140
          "
          rotation="180.947 90 -179.957"
        />
        <a-gltf-model
          id="observatoryNpc-model"
          class="clickable"
          src="#observatoryNpc"
          shadow="cast: true; receive: false"
          scale="14 14 14"
          position="44 2 -60"
          rotation="0 270 0"
        />
        <a-gltf-model
          id="libraryNpc-model"
          class="clickable"
          src="#libraryNpc"
          shadow="cast: true; receive: false"
          scale="12 12 12"
          position="49 1.8 -179"
          rotation="0 270 0"
        />
        <a-gltf-model
          class="clickable"
          id="museumNpc-model"
          src="#museumNpc"
          shadow="cast: true; receive: false"
          scale="15 15 15"
          position="-35 2.4 -70"
          rotation="0 30 0"
        />

        <a-gltf-model
          id="spaceshipNpc-model"
          class="clickable"
          src="#spaceshipNpc"
          shadow="cast: true; receive: false"
          scale="15 15 15"
          position="-45 2.5 -200"
          rotation="0 60 0"
        />
        <a-gltf-model
          id="horoscopeNpc-model"
          class="clickable"
          src="#horoscopeNpc"
          light="type:directional;"
          shadow="cast: true; receive: false"
          scale="15 15 15"
          position="-45 2.5 -156"
          rotation="0 100 0"
        />
        {/* exclamation marks */}
        <a-gltf-model
          id="exclamationMark1-model"
          src="#exclamationMark"
          scale="3 3 3"
          shadow="cast: false; receive: false"
          position="40.691 6 -59.7"
          rotation="0 90 0"
        />
        <a-gltf-model
          id="exclamationMark2-model"
          src="#exclamationMark"
          scale="3 3 3"
          shadow="cast: false; receive: false"
          position="45.986 5.901 -178.886"
          rotation="0 90 0"
        />
        <a-gltf-model
          id="exclamationMark3-model"
          src="#exclamationMark"
          scale="3 3 3"
          shadow="cast: false; receive: false"
          position="-33.5 7 -67.4"
          rotation="0 30 0"
        />
        <a-gltf-model
          id="exclamationMark4-model"
          src="#exclamationMark"
          shadow="cast: false; receive: false"
          scale="3 3 3"
          position="-43.330 7.5 -198.7"
          rotation="0 70 0"
        />
        <a-gltf-model
          id="exclamationMark5-model"
          src="#exclamationMark"
          shadow="cast: false; receive: false"
          scale="3 3 3"
          position="-41.555 5 -156.6"
          rotation="0 100 0"
        />
        <a-camera position="0 4 0" wasd-controls="acceleration:100">
          <a-entity
            gltf-model={chracterColor}
            cursor="rayOrigin: mouse"
            raycaster="objects: .clickable "
            scale="0.2 0.3 0.2"
            height="0.5"
            position="0 -1.8 -0.5"
            rotation="0 180 0"
            id="player"
            animation-mixer="clip: base"
          ></a-entity>
        </a-camera>

        <a-entity
          keyboard-controls
          sound="src: {footsteps};
          on: keydown:keyW"
        ></a-entity>
      </a-scene>
      <BuildingDialog
        buildingInfos={info}
        building={Building}
        open={isopen}
        setOpen={setOpened}
      />
      <ChatWindow serverName={'world'} />
    </div>
  );
};

export default WorldContainer;
