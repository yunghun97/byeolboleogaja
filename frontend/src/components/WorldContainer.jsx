import 'aframe';
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

const WorldContainer = () => {
  return (
    <>
      <a-scene>
        <a-assets>
          <img id="sky" src={sky} />
          <a-asset-item id="ground" src={ground}></a-asset-item>
          <a-asset-item id="library" src={library}></a-asset-item>
          <a-asset-item id="observatory" src={observatory}></a-asset-item>
          <a-asset-item id="spaceship" src={spaceship}></a-asset-item>
          <a-asset-item id="museum" src={museum}></a-asset-item>
          <a-asset-item id="satellite" src={satellite}></a-asset-item>
          <a-asset-item id="witch-house" src={witchHouse}></a-asset-item>
          <a-asset-item id="amongus" src={amongus}></a-asset-item>
          <a-asset-item id="libraryNpc" src={libraryNpc}></a-asset-item>
          <a-asset-item id="observatoryNpc" src={observatoryNpc}></a-asset-item>
          <a-asset-item id="museumNpc" src={museumNpc}></a-asset-item>
          <a-asset-item id="spaceshipNpc" src={spaceshipNpc}></a-asset-item>
          <a-asset-item id="horoscopeNpc" src={horoscopeNpc}></a-asset-item>
        </a-assets>
        <a-sky src="#sky" />
        <a-gltf-model src="#ground" position="0 -5 0" rotation="0 -2 0" />
        <a-gltf-model
          src="#library"
          position="82.276 14.178 -204.775"
          rotation="0 90 0"
        />
        <a-gltf-model
          src="#observatory"
          scale="120 120 120"
          position="41.511 29.726 -56.011"
          rotation="0 90 0"
        />
        <a-gltf-model
          src="#spaceship"
          scale="100 100 100"
          position="-60.211 -1.030 -262.203"
        />
        <a-gltf-model
          src="#museum"
          scale="2.3 2.3 2.3"
          position="-54.671 0 -86.823"
        />
        <a-gltf-model
          src="#satellite"
          scale="100 100 100"
          position="-69.931 45.263 -98.965"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
        />
        <a-gltf-model
          src="#witch-house"
          scale="0.3 0.3 0.3"
          position="-83.652 15.925 -359.571"
          rotation="179.947 0 -179.957"
        />

        <a-gltf-model
          src="#libraryNpc"
          scale="12 12 12"
          position="50 2 -200"
          rotation="0 270 0"
        />
        <a-gltf-model
          src="#observatoryNpc"
          scale="14 14 14"
          position="44 2 -60"
          rotation="0 270 0"
        />
        <a-gltf-model
          src="#museumNpc"
          scale="15 15 15"
          position="-35 2.4 -70"
          rotation="0 30 0"
        />
        <a-gltf-model
          src="#spaceshipNpc"
          scale="15 15 15"
          position="-55 2.5 -200"
          rotation="0 60 0"
        />
        <a-gltf-model
          src="#horoscopeNpc"
          scale="15 15 15"
          position="-65 3 -345"
          rotation="0 0 0"
        />
        <a-camera position="0 7 0">
          <a-entity position="0 -5 0" rotation="0 180 0">
            <a-gltf-model src="#amongus" />
          </a-entity>
        </a-camera>
      </a-scene>
    </>
  );
};

export default WorldContainer;
