import 'aframe';
import 'aframe-extras';
import sky from '@/assets/img/museum/bg-space.jpg?url';
import gallery from '@/assets/model/museum/mdl-gallery.glb?url';
import eagleNebula from '@/assets/img/museum/img-EagleNebula.png?url';
import GalaxyCluster from '@/assets/img/museum/img-GalaxyClusterSDSSJ1531+3414.jpg?url';
import TheFishheadNebula from '@/assets/img/museum/img-TheFishheadNebula.jpg?url';
import HorseheadNebula from '@/assets/img/museum/img-Horsehead nebula.jpg?/url';
import BubbleNebula from '@/assets/img/museum/img-Bubble Nebula(NGC7635).png?/url';
import supernova from '@/assets/img/museum/img-Supernova.jpg?/url';
import rose from '@/assets/img/museum/img-Rose Arp 273,UGC 1810.png?/url';
import ring from '@/assets/img/museum/img-Ring Nebula, M57, NGC 6720.png?url';
import rubin from "@/assets/img/museum/img-Rubin's galaxy UGC 2885.png?url";
import rubinMdl from '@/assets/model/museum/mdl-rubin.glb?url';
import spaceShip from '@/assets/model/museum/mdl-spaceship.glb?url';
import Monocerotis from '@/assets/img/museum/img-V838 Monocerotis.jpg?url';
import elevator from '@/assets/model/museum/mdl-elevator.glb?url';
import { useStore } from '@/store';
import { elevatorIntro } from '@/constants';
import ElevatorDialog from '@/components/ElevatorDialog';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageGallery = () => {
  const chracterColor = useStore((state) => state.chracterColor);
  const [elevatorIntoOpen, setElevatorIntoOpen] = useState(false);
  const [info, setInfo] = useState(elevatorIntro);
  const [nowFloor, setNowFloor] = useState('gallery');
  const [controlFloor, setControlFloor] = useState(false);
  const [floor, setFloor] = useState('');
  const [activeFloor, setActiveFloor] = useState(0);

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const scene1 = sceneEl.querySelector('#scene1');
    const rubinframe = sceneEl.querySelector('#rubinframe');
    const cameraRig = sceneEl.querySelector('#rig-camera');
    const backtoGallery = sceneEl.querySelector('#backtogallery');
    const scene2 = sceneEl.querySelector('#scene2');
    const camera = document.querySelector('#camera');
    const player = sceneEl.querySelector('#player');
    const keys = [];
    const elevatorButton = sceneEl.querySelector('#elevatorButton');
    const elevator1FButton = sceneEl.querySelector('#elevator1FButton');
    const elevator2FButton = sceneEl.querySelector('#elevator2FButton');

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

    backtoGallery.addEventListener('click', function (event) {
      let rotation = camera.getAttribute('rotation');
      camera.setAttribute('position', { x: 0, y: 2, z: 4 });
      camera.setAttribute('rotation', { x: 0, y: 0, z: 0 });

      camera.components['look-controls'].pitchObject.rotation.x =
        THREE.Math.degToRad(rotation.x);
      camera.components['look-controls'].yawObject.rotation.y =
        THREE.Math.degToRad(rotation.y);

      scene1.setAttribute('visible', 'true');
      scene2.setAttribute('visible', 'false');
    });
    rubinframe.addEventListener('click', function () {
      scene1.setAttribute('visible', 'false');
      scene2.setAttribute('visible', 'true');
    });
    elevatorButton.addEventListener('click', function () {
      let rotation = camera.getAttribute('rotation');
      camera.setAttribute('position', { x: 0, y: 2, z: -105 });
      camera.setAttribute('rotation', { x: 0, y: 180, z: 0 });

      camera.components['look-controls'].pitchObject.rotation.x =
        THREE.Math.degToRad(rotation.x);
      camera.components['look-controls'].yawObject.rotation.y =
        THREE.Math.degToRad(rotation.y);
    });
    elevator1FButton.addEventListener('click', function () {
      setElevatorIntoOpen(true);
      setInfo(elevatorIntro);
      setActiveFloor(0);
      setFloor('museum');

      setControlFloor(false);
    });
    elevator2FButton.addEventListener('click', function () {
      let rotation = camera.getAttribute('rotation');
      setElevatorIntoOpen(false);
      setInfo(elevatorIntro);
      setActiveFloor(1);
      setFloor('gallery');
      camera.setAttribute('position', { x: 0, y: 2, z: 4 });
      camera.setAttribute('rotation', { x: 0, y: 0, z: 0 });

      camera.components['look-controls'].pitchObject.rotation.x =
        THREE.Math.degToRad(rotation.x);
      camera.components['look-controls'].yawObject.rotation.y =
        THREE.Math.degToRad(rotation.y);
    });
  }, []);

  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        loading-screen="dotsColor: white; backgroundColor: black"
      >
        <a-entity id="scene1" visible="true">
          <a-gltf-model id="gallery" rotation="0 90 0" src={gallery} />
          <a-gltf-model
            scale="3 3 3"
            rotation="0 0 0"
            position="0 0 -55.4"
            id="elevatorId"
            src={elevator}
          />

          <a-plane
            id="elevatorButton"
            class="clickable"
            geometry="primitive:plane"
            position="1.499 3 -53.74"
            rotation="0 0 0"
            color="#CCC"
            height="0.1"
            width="0.1"
          ></a-plane>
          <a-plane
            id="elevatorPannel"
            class="clickable"
            geometry="primitive:plane"
            position="1.5 3 -53.75"
            rotation="0 0 0"
            color="#5c5a5a"
            height="0.4"
            width="0.2"
          ></a-plane>
          <a-plane
            visible="false"
            id="elevator1FButton"
            class="clickable"
            geometry="primitive:plane"
            position="-1.6 3.25 -55.55"
            rotation="0 90 0"
            color="#CCC"
            height="0.1"
            width="0.1"
          ></a-plane>
          <a-plane
            visible="false"
            id="elevator2FButton"
            class="clickable"
            geometry="primitive:plane"
            position="-1.6 3.25 -55.83"
            rotation="0 90 0"
            color="#CCC"
            height="0.1"
            width="0.1"
          ></a-plane>
          <a-image
            position="-8.3 5.0 40"
            src={eagleNebula}
            width="8"
            height="5"
          ></a-image>
          <a-text
            value="Pillars of Creation - Eagle Nebula (M16)\n 창조의 기둥 - 독수리 성운 \n별자리: 뱀 \n거리: 6,500광년(2,000파섹)"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="-10.3 1.5 40"
          ></a-text>
          <a-image
            position="8.3 5.0 40"
            src={GalaxyCluster}
            width="5.2"
            height="3.5"
          ></a-image>
          <a-text
            value="GALAXY CLUSTER SDSS J1531+3414 \n 은하단 \n별자리: 북쪽 왕관 자리 \n거리: 파란색의 과녁 중심 100,000광년"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="6.5 1.8 40"
          ></a-text>
          <a-image
            position="8.5 5 7"
            src={TheFishheadNebula}
            width="5.2"
            height="3.5"
          ></a-image>
          <a-text
            value="The Fishhead Nebula(IC 1795) \n 물고기 머리 성운 \n별자리: 카시오페아자리 북쪽  \n거리: 약 6,000 광년"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="7 2 7"
          ></a-text>
          <a-image
            position="-8.4 5.3 7"
            src={HorseheadNebula}
            width="4"
            height="5"
          ></a-image>
          <a-text
            value="Horsehead nebula(IC 434) \n 말머리 성운 \n별자리:  오리온자리  \n거리: 약 1,500광년"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="-9.5 2 7"
          ></a-text>
          <a-image
            position="-23.1 5.5 16"
            src={BubbleNebula}
            width="7"
            height="4"
          ></a-image>
          <a-text
            value="Bubble Nebula, NGC 7635 (WFC3) \n 거품 성운 \n별자리:  카시오페아 자리  \n거리: 7,100광년(2,100파섹)"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="-24.8 2 16"
          ></a-text>
          <a-image
            position="23.1 5 16"
            src={supernova}
            width="5"
            height="3.5"
          ></a-image>
          <a-text
            value="M82, NGC 3034  \n Starburst Galaxy \n별자리: 북두칠성  \n거리: 1150만 광년(350만 파섹)"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="22 2 16"
          ></a-text>
          <a-image
            position="8.4 5 -27"
            src={rose}
            width="8"
            height="4"
          ></a-image>
          <a-text
            value="Rose Arp 273, UGC 1810 \n Interacting Galaxies \n별자리: 안드로메다  \n거리:약 3억 4천만 광년(1억 5백만 파섹)"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="6.5 2 -27"
          ></a-text>
          <a-image
            position="-8.4 5 -27"
            src={ring}
            width="8"
            height="4"
          ></a-image>
          <a-text
            value="Ring Nebula, M57, NGC 6720 \n Planetary Nebula \n별자리: 거문고  \n거리: 2,300광년(700파섹)"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="-10 2 -27"
          ></a-text>
          <a-image
            id="rubinframe"
            class="clickable"
            position="-23 5 -15.6"
            src={rubin}
            width="6"
            height="4"
          ></a-image>
          <a-text
            value="Rubin's galaxy, UGC 2885 \n Large Spiral Galaxy \n별자리: 페르세우스  \n거리: 2억 3200만 광년"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="-24.5 2 -15.6"
          ></a-text>
          <a-image
            position="23 5 -15.6"
            src={Monocerotis}
            width="4"
            height="4"
          ></a-image>
          <a-text
            value="	V838 Monocerotis \n Nova-like variable star \n surrounding light echo \n별자리: 모노세로스  \n거리: 약 20,000광년"
            color="#FFFFFF"
            shader="msdf"
            font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
            position="22 2 -15.6"
          ></a-text>
        </a-entity>

        <a-entity id="scene2" visible="false">
          <a-sky src={sky} radius="1000" />
          <a-gltf-model
            id="backtogallery"
            class="clickable"
            src={spaceShip}
            position="-60 -80 0"
            scale="0.5 0.5 0.5"
            rotation="-30 0 0"
          ></a-gltf-model>
          <a-gltf-model
            position="-150 -150 -50"
            rotation="0 -100 90"
            scale="100 100 100"
            src={rubinMdl}
            animation__scale="
              property: scale;
              dir: alternate;
              dur: 10000;
              loop: true;
              to: 90 90 90;
            "
          />
        </a-entity>

        <a-entity id="rig-camera" position="0 1 50">
          <a-entity
            id="camera"
            camera="active: true"
            position="0 2 0"
            wasd-controls="acceleration:50"
            look-controls="mouseEnabled:true"
          >
            <a-entity
              gltf-model={chracterColor}
              cursor="rayOrigin: mouse"
              raycaster="objects: .clickable "
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
export default ImageGallery;
