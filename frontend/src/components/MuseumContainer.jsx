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
import vendingMachine from '@/assets/model/museum/mdl-vending-machine.glb?url';
import { useEffect } from 'react';
import { getSatellite } from '@/api/satellite';

const MuseumContainer = ({ setOpen, setSatellite }) => {
  const initSatellite = async (satelliteId) => {
    const res = await getSatellite(satelliteId);
    setSatellite(res.data);
  };

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const telescopeHubble = sceneEl.querySelector('#hubble');
    const telescopeChandra = sceneEl.querySelector('#chandra');
    const telescopeSpitzer = sceneEl.querySelector('#spitzer');
    const telescopeFermi = sceneEl.querySelector('#fermi');
    const telescopeKepler = sceneEl.querySelector('#kepler');
    const telescopeJames = sceneEl.querySelector('#james');
    const cam = document.querySelector('#camera');
    const player = sceneEl.querySelector('#player');
    //키 이동 이벤트 가져오기
    document.addEventListener('keydown', function (event) {
      let nowRotation = player.getAttribute('rotation');
      let nowPosition = player.getAttribute('position');

      console.log('player', player.getAttribute('position'));
      console.log('player', player.getAttribute('rotation'));
      console.log('cam', cam.getAttribute('position'));
      console.log('cam', cam.getAttribute('rotation'));

      if (event.key === 'ArrowUp') {
        nowRotation.y = 180;
        player.setAttribute('rotation', nowRotation);
        player.setAttribute('animation-mixer', { clip: 'walk' });
      }
      if (event.key === 'ArrowDown') {
        nowRotation.y = 0;
        player.setAttribute('rotation', nowRotation);
        player.setAttribute('animation-mixer', { clip: 'walk' });
      }

      if (event.key === 'ArrowRight') {
        nowRotation.y = 90;
        player.setAttribute('rotation', nowRotation);
        player.setAttribute('animation-mixer', { clip: 'walk' });
      }
      if (event.key === 'ArrowLeft') {
        nowRotation.y = -90;
        player.setAttribute('rotation', nowRotation);
        player.setAttribute('animation-mixer', { clip: 'walk' });
      }
    });
    document.addEventListener('keyup', function () {
      player.setAttribute('animation-mixer', { clip: 'base' });
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

    return;
  });

  return (
    <div>
      <a-scene physics="driver: ammo">
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img id="sky" src={sky} />
        </a-assets>
        <a-sky id="backSky" src={sky} theta-length="90" radius="50" />
        <a-cylinder
          material="src:#cam1; opacity: .95"
          src="#groundTexture"
          radius="51"
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
        <a-text
          value="Fermi Gamma-ray Large Area \n Space Telescope"
          position="-21.5 1 -7"
          color="#0a0a0a"
        ></a-text>
        <a-plane
          geometry="primitive:plane"
          position="-20 1 -7"
          color="#CCC"
          height="1"
          width="3.5"
        ></a-plane>
        <a-text
          value="Hubble Space Telescope"
          position="5 1 -28"
          color="#0a0a0a"
        ></a-text>
        <a-plane
          geometry="primitive:plane"
          position="6.2 1 -28"
          color="#CCC"
          height="1"
          width="3"
        ></a-plane>
        <a-text
          value="Chandra X-ray Observatory"
          position="28.7 1 -7"
          color="#0a0a0a"
        ></a-text>
        <a-plane
          geometry="primitive:plane"
          position="30 1 -7"
          color="#CCC"
          height="1"
          width="3"
        ></a-plane>
        <a-text
          value="Spitzer Space Telescope"
          position="28.8 1 12"
          color="#0a0a0a"
        ></a-text>
        <a-plane
          geometry="primitive:plane"
          position="30 1 12"
          color="#CCC"
          height="1"
          width="3"
        ></a-plane>
        <a-text
          value="James Webb Space Telescope"
          position="4.5 1 22"
          color="#0a0a0a"
        ></a-text>
        <a-plane
          geometry="primitive:plane"
          position="6 1 22"
          color="#CCC"
          height="1"
          width="3.5"
        ></a-plane>
        <a-text
          value="Kepler Space Observatory"
          position="-21.3 1 12"
          color="#0a0a0a"
        ></a-text>
        <a-plane
          geometry="primitive:plane"
          position="-20 1 12"
          color="#CCC"
          height="1"
          width="3"
        ></a-plane>
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
          class="clickable"
          scale="0.04 0.04 0.04"
          rotation="0 180 0"
          position="-33 0 30"
          id="elevator"
          src={elevator}
        />
        <a-gltf-model
          class="clickable"
          rotation="0 30 0"
          position="-32 0 37"
          id="vendingMachine"
          src={vendingMachine}
        />

        <a-entity id="rig-camera" position="0 0 9">
          <a-entity
            id="camera"
            camera="active: true; fov: 60"
            position="0 1.6 2"
            wasd-controls="acceleration:50;"
            look-controls="mouseEnabled:true"
          >
            <a-entity
              gltf-model={amongUs}
              cursor="rayOrigin: mouse;"
              raycaster="objects: .clickable"
              scale="0.2 0.2 0.2"
              height="0.5"
              position="0 -1.2 -3"
              rotation="0 180 0"
              id="player"
              animation-mixer="clip: base"
            ></a-entity>
          </a-entity>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default MuseumContainer;
