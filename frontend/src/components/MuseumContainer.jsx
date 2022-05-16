import 'aframe';
import 'aframe-extras';

import sky from '@/assets/img/museum/bg-space.jpg?url';
import amongUs from '@/assets/model/common/mdl-amongus.glb?url';
import fence from '@/assets/model/museum/mdl-fence.glb?url';
import jamesWebbSpaceTelescope from '@/assets/model/museum/mdl-james.glb?url';
import hubbleSpaceTelescope from '@/assets/model/museum/mdl-hubble.glb?url';
import chandraXrayObservatory from '@/assets/model/museum/mdl-chandra.glb?url';
import spitzerSpaceTelescope from '@/assets/model/museum/mdl-spitzer.glb?url';
import fermiGammarayTelescope from '@/assets/model/museum/mdl-fermi.glb?url';
import keplerSpaceObservatory from '@/assets/model/museum/mdl-kepler.glb?url';
import elevator from '@/assets/model/museum/mdl-elevator.glb?url';
import carpet from '@/assets/model/museum/mdl-carpet.glb?url';

import enterance from '@/assets/model/museum/mdl-enterance.glb?url';
import exit from '@/assets/model/museum/mdl-exit.glb?url';
import backimg from '@/assets/img/museum/img-backimg.png?url';
import { useState, useEffect } from 'react';
import { getSatellite } from '@/api/satellite';
import { elevatorIntro } from '@/constants';
import ElevatorDialog from '@/components/ElevatorDialog';
const MuseumContainer = ({ setOpen, setSatellite }) => {
  const initSatellite = async (satelliteId) => {
    const res = await getSatellite(satelliteId);
    setSatellite(res.data);
  };

  const [elevatorIntoOpen, setElevatorIntoOpen] = useState(false);
  const [info, setInfo] = useState(elevatorIntro);
  const [nowFloor, setNowFloor] = useState('museum');
  const [controlFloor, setControlFloor] = useState(false);
  const [floor, setFloor] = useState('');
  const [activeFloor, setActiveFloor] = useState(0);
  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const telescopeHubble = sceneEl.querySelector('#hubble');
    const telescopeChandra = sceneEl.querySelector('#chandra');
    const telescopeSpitzer = sceneEl.querySelector('#spitzer');
    const telescopeFermi = sceneEl.querySelector('#fermi');
    const telescopeKepler = sceneEl.querySelector('#kepler');
    const telescopeJames = sceneEl.querySelector('#james');
    const textHubble = sceneEl.querySelector('#text-hubble');
    const textChandra = sceneEl.querySelector('#text-chandra');
    const textSpitzer = sceneEl.querySelector('#text-spitzer');
    const textFermi = sceneEl.querySelector('#text-fermi');
    const textKepler = sceneEl.querySelector('#text-kepler');
    const textJames = sceneEl.querySelector('#text-james');
    const camera = document.querySelector('#camera');
    const player = sceneEl.querySelector('#player');
    const elevatorButton = sceneEl.querySelector('#elevatorButton');
    const elevator1FButton = sceneEl.querySelector('#elevator1FButton');
    const elevator2FButton = sceneEl.querySelector('#elevator2FButton');
    const enterance = sceneEl.querySelector('#enterance');
    document.addEventListener('keydown', function (event) {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowLeft' ||
        event.key === 'w' ||
        event.key === 'a' ||
        event.key === 's' ||
        event.key === 'd'
      ) {
        player.setAttribute('animation-mixer', { clip: 'walk' });
      }
    });
    document.addEventListener('keyup', function () {
      player.setAttribute('animation-mixer', { clip: 'base' });
    });
    enterance.addEventListener('hitstart', (e) => {
      console.log(e);
    });
    elevatorButton.addEventListener('click', function () {
      let rotation = camera.getAttribute('rotation');
      camera.setAttribute('position', { x: -35.5, y: 2, z: 5.358 });
      camera.setAttribute('rotation', { x: -10.5, y: -41.8, z: 0 });

      camera.components['look-controls'].pitchObject.rotation.x =
        THREE.Math.degToRad(rotation.x);
      camera.components['look-controls'].yawObject.rotation.y =
        THREE.Math.degToRad(rotation.y);
    });
    elevator1FButton.addEventListener('click', function () {
      let rotation = camera.getAttribute('rotation');
      setElevatorIntoOpen(false);
      setInfo(elevatorIntro);
      setActiveFloor(0);
      setFloor('museum');

      setControlFloor(false);
      camera.setAttribute('position', { x: 0, y: 1, z: 0 });
      camera.setAttribute('rotation', { x: 0, y: 0, z: 0 });

      camera.components['look-controls'].pitchObject.rotation.x =
        THREE.Math.degToRad(rotation.x);
      camera.components['look-controls'].yawObject.rotation.y =
        THREE.Math.degToRad(rotation.y);
    });
    elevator2FButton.addEventListener('click', function () {
      setElevatorIntoOpen(true);
      setInfo(elevatorIntro);
      setActiveFloor(1);
      setFloor('gallery');
    });
    telescopeHubble.addEventListener('click', function () {
      const hubble = 1;
      initSatellite(hubble);
      setOpen(true);
    });
    telescopeJames.addEventListener('click', function () {
      const james = 2;
      initSatellite(james);
      setOpen(true);
    });
    telescopeChandra.addEventListener('click', function () {
      const chandra = 3;
      initSatellite(chandra);
      setOpen(true);
    });
    telescopeSpitzer.addEventListener('click', function () {
      const spitzer = 4;
      initSatellite(spitzer);
      setOpen(true);
    });
    telescopeFermi.addEventListener('click', function () {
      const fermi = 5;
      initSatellite(fermi);
      setOpen(true);
    });
    telescopeKepler.addEventListener('click', function () {
      const kepler = 6;
      initSatellite(kepler);
      setOpen(true);
    });
    textHubble.addEventListener('click', function () {
      const hubble = 1;
      initSatellite(hubble);
      setOpen(true);
    });
    textJames.addEventListener('click', function () {
      const james = 2;
      initSatellite(james);
      setOpen(true);
    });
    textChandra.addEventListener('click', function () {
      const chandra = 3;
      initSatellite(chandra);
      setOpen(true);
    });
    textSpitzer.addEventListener('click', function () {
      const spitzer = 4;
      initSatellite(spitzer);
      setOpen(true);
    });
    textFermi.addEventListener('click', function () {
      const fermi = 5;
      initSatellite(fermi);
      setOpen(true);
    });
    textKepler.addEventListener('click', function () {
      const kepler = 6;
      initSatellite(kepler);
      setOpen(true);
    });

    return;
  });

  return (
    <div>
      <a-scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img id="sky" src={sky} />
        </a-assets>
        <a-sky id="backSky" src={sky} theta-length="90" radius="52" />
        <a-gltf-model
          id="carpet"
          position="0 0.1 48"
          scale="0.2 0.2 0.2"
          rotation="0 0 0"
          src={carpet}
        />
        <a-gltf-model
          id="enterance"
          position="0 0 50"
          scale="1 1 1"
          rotation="0 180 0"
          src={enterance}
        />
        <a-gltf-model
          id="exit"
          position="0 3 49"
          scale="0.4 0.4 0.4"
          rotation="0 180 0"
          src={exit}
        />
        <a-image
          position="0 2 51.7"
          src={backimg}
          rotation="0 180 0"
          width="5"
          height="4"
        ></a-image>
        <a-cylinder
          material="src:#cam1; opacity: .95"
          src="#groundTexture"
          radius="53"
          height="0.1"
        ></a-cylinder>
        <a-gltf-model
          id="fence1"
          position="65 -1.3 -10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence2"
          position="40 -1.3 -30"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence3"
          position="20 -1.3 -30"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence4"
          position="-5 -1.3 -10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence5"
          position="65 -1.3 10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence6"
          position="40 -1.3 20"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence7"
          position="20 -1.3 20"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence8"
          position="-5 -1.3 10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence9"
          position="45 -1.3 -10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence10"
          position="15 -1.3 -10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence11"
          position="45 -1.3 10"
          rotation="0 90 0"
          src={fence}
        />
        <a-gltf-model
          id="fence12"
          position="15 -1.3 10"
          rotation="0 90 0"
          src={fence}
        />
        <a-entity id="text-fermi">
          <a-entity position="-21.5 1 -7">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3.5"
            ></a-plane>
            <a-text
              value="Fermi Gamma-ray Large Area \n Space Telescope"
              position="-1.5 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
          <a-entity position="-21.5 1 -7" rotation="0 180 0">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3.5"
            ></a-plane>
            <a-text
              value="Fermi Gamma-ray Large Area \n Space Telescope"
              position="-1.5 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
        </a-entity>
        <a-entity id="text-hubble">
          <a-entity position="6.2 1 -28">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Hubble Space Telescope"
              position="-1.2 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
          <a-entity position="6.2 1 -28" rotation="0 180 0">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Hubble Space Telescope"
              position="-1.2 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
        </a-entity>
        <a-entity id="text-chandra">
          <a-entity position="30 1 -7">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Chandra X-ray Observatory"
              position="-1.3 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
          <a-entity position="30 1 -7" rotation="0 180 0">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Chandra X-ray Observatory"
              position="-1.3 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
        </a-entity>
        <a-entity id="text-spitzer">
          <a-entity position="30 1 12">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Spitzer Space Telescope"
              position="-1.2 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
          <a-entity position="30 1 12" rotation="0 180 0">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Spitzer Space Telescope"
              position="-1.2 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
        </a-entity>
        <a-entity id="text-james">
          <a-entity position="6 1 22">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3.5"
            ></a-plane>
            <a-text
              value="James Webb Space Telescope"
              position="-1.5 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
          <a-entity position="6 1 22" rotation="0 180 0">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3.5"
            ></a-plane>
            <a-text
              value="James Webb Space Telescope"
              position="-1.5 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
        </a-entity>
        <a-entity id="text-kepler">
          <a-entity position="-20 1 12">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Kepler Space Observatory"
              position="-1.3 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
          <a-entity position="-20 1 12" rotation="0 180 0">
            <a-plane
              class="clickable"
              geometry="primitive:plane"
              position="0 0 0"
              color="#CCC"
              height="1"
              width="3"
            ></a-plane>
            <a-text
              value="Kepler Space Observatory"
              position="-1.3 0 0"
              color="#0a0a0a"
            ></a-text>
          </a-entity>
        </a-entity>
        <a-gltf-model
          class="clickable"
          id="james"
          position="0 5 20"
          scale="0.5 0.5 0.5"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
          src={jamesWebbSpaceTelescope}
        />
        <a-gltf-model
          class="clickable"
          id="hubble"
          position="0 10 -33"
          animation="property: rotation; to: 90 0 360; loop: true; dur: 10000 easing:linear "
          src={hubbleSpaceTelescope}
        />
        <a-gltf-model
          class="clickable"
          id="chandra"
          position="30 5 -11"
          rotation="0 90 0"
          animation="property: rotation; to: 90 360 90; loop: true; dur: 10000"
          src={chandraXrayObservatory}
        />
        <a-gltf-model
          class="clickable"
          id="spitzer"
          position="25 5 10"
          scale="0.6 0.6 0.6"
          rotation="90 180 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
          src={spitzerSpaceTelescope}
        />
        <a-gltf-model
          class="clickable"
          id="fermi"
          position="-25 5 -10"
          scale="0.8 0.8 0.8"
          rotation="90 90 0"
          animation="property: rotation; to: 90 0 90; loop: true; dur: 10000"
          src={fermiGammarayTelescope}
        />
        <a-gltf-model
          class="clickable"
          id="kepler"
          position="-25 5 10"
          rotation="90 360 0"
          animation="property: rotation; to: 360 0 0; loop: true; dur: 10000"
          src={keplerSpaceObservatory}
        />
        <a-gltf-model
          scale="3 3 3"
          rotation="0 140 0"
          position="-35 -0.1 35"
          id="elevatorId"
          src={elevator}
        />
        <a-plane
          id="elevatorButton"
          class="clickable"
          geometry="primitive:plane"
          position="-34.99 3 32.7"
          rotation="0 140 0"
          color="#CCC"
          height="0.1"
          width="0.1"
        ></a-plane>
        <a-plane
          id="elevatorPannel"
          class="clickable"
          geometry="primitive:plane"
          position="-35 3 32.7"
          rotation="0 140 0"
          color="#5c5a5a"
          height="0.4"
          width="0.2"
        ></a-plane>
        <a-plane
          visible="false"
          id="elevator1FButton"
          class="clickable"
          geometry="primitive:plane"
          position="-34.06 3.02 36.06"
          rotation="0 230 0"
          color="#CCC"
          height="0.1"
          width="0.1"
        ></a-plane>
        <a-plane
          visible="false"
          id="elevator2FButton"
          class="clickable"
          geometry="primitive:plane"
          position="-34.08 3.12 36.35"
          rotation="0 230 0"
          color="#CCC"
          height="0.1"
          width="0.1"
        ></a-plane>

        <a-entity id="rig-camera" position="0 0 30">
          <a-entity
            id="camera"
            camera="active: true"
            position="0 2 0"
            wasd-controls="acceleration:50"
            look-controls="mouseEnabled:true"
          >
            <a-entity
              gltf-model={amongUs}
              cursor="rayOrigin: mouse"
              raycaster="objects: .clickable"
              scale="0.2 0.2 0.2"
              height="0.5"
              position="0 -1.35 -0.5"
              rotation="0 180 0"
              id="player"
              animation-mixer="clip: base"
            ></a-entity>
          </a-entity>
        </a-entity>
      </a-scene>
      <ElevatorDialog
        info={info}
        elevatorIntoOpen={elevatorIntoOpen}
        setElevatorIntoOpen={setElevatorIntoOpen}
        activeFloor={activeFloor}
        nowFloor={nowFloor}
        floor={floor}
        setControlFloor={setControlFloor}
      />
    </div>
  );
};

export default MuseumContainer;
