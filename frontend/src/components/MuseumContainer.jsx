// @ts-nocheck
import 'aframe';
import 'aframe-extras';





const MuseumContainer = () => {

  return (
      <a-scene>
          <a-assets>
               <a-asset-item id="model" src="/src/assets/amongUs.glb"></a-asset-item>
          </a-assets>
         
          <a-text value="허블우주망원경" font="/src/assets/text/BMYEONSUNG_ttf-msdf.json" font-image="/src/assets/text/BMYEONSUNGttf.png" negate="false" scale="2 2 1"  position="2 1.5 0"></a-text>
          <a-gltf-model position="0 0 0" scale="1.8,2,2" src="src/assets/showroom.glb" />
          <a-gltf-model position="0 0.4 0"  src="src/assets/spaceLine.glb" />
          <a-gltf-model position="-0.8 1 -0.8" rotation="90,0,0"  src="src/assets/hubble space telescope.glb" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000" />
        
          <a-camera position="0 1.5 4">
            <a-entity position="0 -1.1 -1" rotation="0 180 0" scale="0.8 0.8 0.8">
              <a-gltf-model  scale="0.2, 0.2  0.2"  id="player" src="#model"/>
            </a-entity>
               
          </a-camera>
         
      </a-scene>
  

  );
};

export default MuseumContainer;
