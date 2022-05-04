// @ts-nocheck
import 'aframe';
import 'aframe-extras';





const MuseumContainer = () => {

  return (
      <a-scene >
          <a-assets>
            <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
            <a-asset-item id="model" src="/src/assets/amongUs.glb"></a-asset-item>
          </a-assets>
          <a-sky src="src/assets/space.jpg" theta-length="90" radius="35" />
          <a-cylinder  src="#groundTexture" radius="36" height="0.1"></a-cylinder>
         
          <a-gltf-model id="fence1" position="61 -1.3 -10" rotation="0 90 0" src="src/assets/fence.glb" />
          <a-gltf-model id="fence1" position="41 -1.3 -10" rotation="0 90 0" src="src/assets/fence.glb" />
          <a-gltf-model id="fence2" position="21 -1.3 -10" rotation="0 90 0" src="src/assets/fence.glb" />
          <a-gltf-model id="fence3" position="1 -1.3 -10" rotation="0 90 0"  src="src/assets/fence.glb" />
        
          <a-gltf-model id="fence1" position="61 -1.3 10" rotation="0 90 0" src="src/assets/fence.glb" />
          <a-gltf-model id="fence1" position="41 -1.3 10" rotation="0 90 0" src="src/assets/fence.glb" />
          <a-gltf-model id="fence2" position="21 -1.3 10" rotation="0 90 0" src="src/assets/fence.glb" />
          <a-gltf-model id="fence3" position="1 -1.3 10"  rotation="0 90 0"  src="src/assets/fence.glb" />
  

          <a-text value="James Webb Space Telescope"  position="-15 1.5 -6"></a-text>
          <a-text value="Hubble Space Telescope"   position="3 1.5 -6"></a-text>
          <a-text value="Chandra X-ray Observatory"  position="25 1.5 -6"></a-text>
          <a-text value="Spitzer Space Telescope"  position="15 2 10" rotation="0 180 0"></a-text>
          <a-text value="Fermi Gamma-ray Large Area Space Telescope"  position="-3 2 10" rotation="0 180 0"></a-text>
          <a-text value="Kepler space observatory"  position="-25 2 10" rotation="0 180 0"></a-text>

          <a-gltf-model id="james"  position="-19 3 -10" scale="0.5 0.5 0.5"  src="src/assets/james_webb_space_telescope.glb" />
          <a-gltf-model id="hubble" position="-0.2 8 -12" rotation="-180 0 0"  src="src/assets/hubble space telescope.glb"  />
          <a-gltf-model id="chandra" position="25 2 -10" rotation="0 90 10" src="src/assets/Chandra X-ray Observatory.glb"/>
          <a-gltf-model id="spitzer" position="21 3 10" scale="0.6 0.6 0.6"  rotation="60 360 0" src="src/assets/Spitzer Space Telescope.glb"/>
          <a-gltf-model id="fermi" position="1 3 10"  scale="0.8 0.8 0.8"  rotation="90 90 0" src="src/assets/Fermi Gamma-ray Large Area Space Telescope.glb"/>
          <a-gltf-model id="kepler" position="-20 3 10"  rotation="0 90 0" src="src/assets/Kepler space observatory.glb"/>
         
          <a-camera position="0 1.5 4">
            <a-entity position="0 -1.1 -1" rotation="0 180 0" scale="0.8 0.8 0.8">
              <a-gltf-model  scale="0.2 0.2 0.2"  id="player" src="#model"/>
            </a-entity>
               
          </a-camera>
         
      </a-scene>
  

  );
};

export default MuseumContainer;
