// @ts-nocheck
import 'aframe';
import 'aframe-extras';
import { useEffect } from 'react';

const MuseumContainer = () => {

  

  return (
       <a-scene>
           <a-assets>
               <a-asset-item id="model" src="/src/assets/amongUs.glb"></a-asset-item>
           </a-assets>
    
           <a-gltf-model   position="0 0 0" scale="1.8,2,1.8" src="src/assets/showroom.glb" />
    
            <a-camera position="0 1.5 4">
                <a-entity  position="0 -1.1 -1" rotation="0 180 0" scale="0.8 0.8 0.8">
                  <a-gltf-model animation-mixer="clip: walk" scale="0.2, 0.2  0.2" keydown id="player" src="#model"/>
               </a-entity>
               
            </a-camera>
         
         </a-scene>
  

  );
};

export default MuseumContainer;
