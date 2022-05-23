import 'aframe';
import ground from '@/assets/model/moon/mdl-moon-ground.glb?url';
import sky from '@/assets/img/moon/bg-moonsky.jpg?url';
import flag from '@/assets/model/moon/mdl-flag.glb?url';
import rabbit from '@/assets/model/moon/mdl-rabbit.glb?url';
import spaceship from '@/assets/model/world/mdl-spaceship.glb?url';
import spaceshipNpc from '@/assets/model/world/mdl-npc-4.glb?url';
import PlanetDialog from '@/components/PlanetDialog';
import QuizDialog from '@/components/QuizDialog';
import BuildingDialog from '@/components/BuildingDialog';
import { moonInfos, goHomeInfos } from '@/constants';
import { useState, useEffect } from 'react';
import { useStore } from '@/store';
import { getFlags } from '@/api/flag';
import FlagInfoDialog from '@/components/FlagInfoDialog';

const MoonContainer = () => {
  const [open, setOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [buildingOpen, setBuildingOpen] = useState(false);
  const [info, setInfo] = useState(moonInfos);
  const [building, setBuilding] = useState('');
  const chracterColor = useStore((state) => state.chracterColor);

  const [flags, setFlags] = useState([]);
  const [flagOpen, setFlagOpen] = useState(false);
  const [flagInfo, setFlagInfo] = useState({
    nickname: '',
    content: '',
    createdDate: [],
  });

  const initFlags = async () => {
    try {
      const res = await getFlags('all');
      setFlags(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initFlags();
  }, []);

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    const rabbitNpcEl = sceneEl.querySelector('#rabbitNpc');
    const spaceshipNpcEl = sceneEl.querySelector('#spaceshipNpc-model');
    const player = sceneEl.querySelector('#player');
    const keys = [];

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
        player.setAttribute('animation-mixer', {
          clip: 'walk',
          timeScale: 0.15,
        });
      } else {
        player.setAttribute('animation-mixer', {
          clip: 'base',
          timeScale: 0.15,
        });
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

    rabbitNpcEl.addEventListener('click', function () {
      setOpen(true);
      setInfo(moonInfos);
    });

    spaceshipNpcEl.addEventListener('click', function () {
      setBuildingOpen(true);
      setInfo(goHomeInfos);
      setBuilding('world');
    });

    flags.forEach((flag, index) => {
      const flagEl = document.querySelector(`#flag${index}`);
      flagEl.addEventListener('click', function () {
        setFlagOpen(true);
        setFlagInfo(flag);
      });
    });
  });

  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        loading-screen="dotsColor: white; backgroundColor: black"
      >
        <a-assets>
          <img id="sky" src={sky} />
          <a-asset-item id="ground" src={ground}></a-asset-item>
          <a-asset-item id="amongus" src={chracterColor}></a-asset-item>
          <a-asset-item id="flag" src={flag}></a-asset-item>
          <a-asset-item id="rabbit" src={rabbit}></a-asset-item>
          <a-asset-item id="spaceship" src={spaceship}></a-asset-item>
          <a-asset-item id="spaceshipNpc" src={spaceshipNpc}></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-gltf-model src="#ground" position="0 -5 0" rotation="0 -2 0" />
        <a-text
          value="V"
          position="-74 36 -36.5"
          color="#ca2b29"
          align="center"
          scale="20 20 20"
          shader="msdf"
          font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumpenscript/NanumPenScript-Regular.json"
        ></a-text>
        {flags.map((flag, index) => (
          <a-gltf-model
            key={index}
            id={`flag${index}`}
            class="clickable"
            src={`#flag`}
            position={`${15 * (index % 10) - 75} -13 ${
              -37 - 10 * Math.floor(index / 10)
            }`}
            scale="5 8 5"
          />
        ))}
        <a-gltf-model
          id="rabbitNpc"
          class="clickable"
          src="#rabbit"
          position="0 -7 -25"
          scale="1 1 1"
          animation-mixer="clip : Take 001"
        />

        <a-gltf-model
          id="spaceship-model"
          src="#spaceship"
          shadow="cast: true; receive: false"
          scale="130 130 130"
          position="80.37 -5.8 53"
          rotation="0 140 0"
        />
        <a-gltf-model
          id="spaceshipNpc-model"
          class="clickable"
          src="#spaceshipNpc"
          shadow="cast: true; receive: false"
          scale="23 23 23"
          position="100 1 10.8"
          rotation="0 260 0"
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
        planetInfos={info}
        open={open}
        setOpen={setOpen}
        setQuizOpen={setQuizOpen}
      />
      <QuizDialog open={quizOpen} setOpen={setQuizOpen} initFlags={initFlags} />
      <BuildingDialog
        buildingInfos={info}
        building={building}
        open={buildingOpen}
        setOpen={setBuildingOpen}
      />
      <FlagInfoDialog open={flagOpen} setOpen={setFlagOpen} info={flagInfo} />
    </div>
  );
};

export default MoonContainer;
