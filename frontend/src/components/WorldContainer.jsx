import { useState, useEffect } from 'react';

import 'aframe';
import { Button } from '@mui/material';
import sky from '@/assets/img/world/bg-world.jpg?url';
import ground from '@/assets/model/world/mdl-ground.glb?url';
import library from '@/assets/model/world/mdl-library.glb?url';
import observatory from '@/assets/model/world/mdl-observatory.glb?url';
import spaceship from '@/assets/model/world/mdl-spaceship.glb?url';
import museum from '@/assets/model/world/mdl-museum.glb?url';
import satellite from '@/assets/model/world/mdl-satellite.glb?url';
import witchHouse from '@/assets/model/world/mdl-witchhouse.glb?url';
import amongus from '@/assets/model/common/mdl-amongus.glb?url';
import observatoryNpc from '@/assets/model/world/mdl-npc-1.glb?url';
import libraryNpc from '@/assets/model/world/mdl-npc-2.glb?url';
import museumNpc from '@/assets/model/world/mdl-npc-3.glb?url';
import spaceshipNpc from '@/assets/model/world/mdl-npc-4.glb?url';
import horoscopeNpc from '@/assets/model/world/mdl-npc-5.glb?url';

import LoadingScene from '@/components/LoadingScene';
import BuildingDialog from '@/components/BuildingDialog';

import {
  observatoryIntro,
  libraryIntro,
  museumIntro,
  spaceshipIntro,
  horoscopeIntro,
} from '@/constants';

import { useStore } from '@/store';
const WorldContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const loadingCharacter = useStore((state) => state.characterColor);
  console.log(loadingCharacter);
  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const libraryEl = sceneEl.querySelector('#library-model');
    const observatoryEl = sceneEl.querySelector('#observatory-model');
    const spaceshipEl = sceneEl.querySelector('#spaceship-model');
    const satelliteEl = sceneEl.querySelector('#satellite-model');
    const witchHouseEl = sceneEl.querySelector('#witch-house-model');
    const libraryNpcEl = sceneEl.querySelector('#libraryNpc-model');
    const observatoryNpcEl = sceneEl.querySelector('#observatoryNpc-model');
    const museumNpcEl = sceneEl.querySelector('#museumNpc-model');
    const spaceshipNpcEl = sceneEl.querySelector('#spaceshipNpc-model');
    const horoscopeNpcEl = sceneEl.querySelector('#horoscopeNpc-model');

    libraryEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    observatoryEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    spaceshipEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    satelliteEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    witchHouseEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    libraryNpcEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    observatoryNpcEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    museumNpcEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    spaceshipNpcEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
    horoscopeNpcEl.addEventListener('model-loaded', function () {
      setProgress(progress + 1);
    });
  });

  useEffect(() => {
    // model-loaded 이벤트 3개가 1개로 처리되는 문제로 progress 값 6 이상으로 임의 설정
    if (progress >= 6) {
      setIsLoading(false);
    }
  }, [progress]);

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
    <>
      {isLoading && <LoadingScene loadingTime={progress} />}
      <a-scene
        vr-mode-ui="enabled: false"
        loading-screen="enabled: false"
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
          <a-asset-item id="amongus" src={loadingCharacter}></a-asset-item>
          <a-asset-item id="libraryNpc" src={libraryNpc}></a-asset-item>
          <a-asset-item id="observatoryNpc" src={observatoryNpc}></a-asset-item>
          <a-asset-item id="museumNpc" src={museumNpc}></a-asset-item>
          <a-asset-item id="spaceshipNpc" src={spaceshipNpc}></a-asset-item>
          <a-asset-item id="horoscopeNpc" src={horoscopeNpc}></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-entity
          position="0 400 25"
          light="type:point;
          intensity: 1.5;
          castShadow:true;
          shadowCameraTop:    500;
          shadowCameraRight:  500;
          shadowCameraLeft:   -500"
        ></a-entity>
        <a-entity
          position="0 400 25"
          light="type:directional;
          intensity: 1.5;
          castShadow:true;
          shadowCameraTop:    500;
          shadowCameraRight:  500;
          shadowCameraLeft:   -500"
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
          position="82.276 14.178 -204.775"
          rotation="0 90 0"
        />
        <a-gltf-model
          id="observatory-model"
          src="#observatory"
          scale="120 120 120"
          shadow="cast: true; receive: false"
          position="41.511 29.726 -56.011"
          rotation="0 90 0"
        />
        <a-gltf-model
          id="spaceship-model"
          src="#spaceship"
          shadow="cast: true; receive: false"
          scale="100 100 100"
          position="-60.211 -1.030 -262.203"
        />
        <a-gltf-model
          id="museum-model"
          src="#museum"
          shadow="cast: true; receive: false"
          scale="2.3 2.3 2.3"
          position="-54.671 0 -86.823"
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
          position="-83.652 15.925 -359.571"
          rotation="179.947 0 -179.957"
        />
        <a-gltf-model
          id="libraryNpc-model"
          src="#libraryNpc"
          scale="12 12 12"
          position="50 2 -200"
          rotation="0 270 0"
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
          position="50 2 -200"
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
          position="-55 2.5 -200"
          rotation="0 60 0"
        />
        <a-gltf-model
          id="horoscopeNpc-model"
          class="clickable"
          src="#horoscopeNpc"
          shadow="cast: true; receive: false"
          scale="15 15 15"
          position="-65 3 -345"
          rotation="0 0 0"
        />
        <a-camera position="0 7 0" wasd-controls="acceleration:100">
          <a-entity
            position="0 -5 0"
            rotation="0 180 0"
            cursor="rayOrigin: mouse;"
            raycaster="objects: .clickable"
          >
            <a-gltf-model src="#amongus" />
          </a-entity>
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
    </>
  );
};

export default WorldContainer;
