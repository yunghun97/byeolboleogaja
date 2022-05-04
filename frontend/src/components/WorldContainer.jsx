import 'aframe';
import 'aframe-extras';

AFRAME.registerComponent('movement', {

  init () {
    // Do something when component first attached.    
    const sceneEl = document.querySelector('a-scene');
    const CameraEl =sceneEl.querySelector('a-camera');
    const crystalBall = sceneEl.querySelector('#crystal-ball');
    
    crystalBall.setAttribute('animation-mixer', {clip: 'base'});

  },

  
});

const WorldContainer = () => {
  return (
    <>
      <a-scene>
        <a-assets>
          <a-asset-item id="fountain" src="src/assets/fountain.glb"></a-asset-item>
          <a-asset-item id="library" src="src/assets/library.glb"></a-asset-item>
          <a-asset-item id="observatory" src="src/assets/observatory.glb"></a-asset-item>
          <a-asset-item id="spaceship" src="src/assets/spaceship.glb"></a-asset-item>
          <a-asset-item id="science-museum" src="src/assets/science-museum.glb"></a-asset-item>
          <a-asset-item id="satellite" src="src/assets/satellite.glb"></a-asset-item>
          <a-asset-item id="crystal-ball" src="src/assets/crystal-ball.glb"></a-asset-item>
        </a-assets>
        <a-entity position="69.672 20.323 -192.333" rotation="0 90 0">
          <a-gltf-model src="#library" />
        </a-entity>
        <a-entity scale="100 100 100" position="41.511 29.884 -56.011" rotation="0 90 0">
          <a-gltf-model src="#observatory" />
        </a-entity>
        <a-entity scale="100 100 100" position="-67.182 0 -262.203">
          <a-gltf-model src="#spaceship" />
        </a-entity>
        <a-entity scale="2 2 2" position="-61.630 4.456 -86.823">
          <a-gltf-model src="#science-museum" />
        </a-entity>
        <a-entity scale="100 100 100" position="-80.317 46.147 -98.965" rotation="0 55.643 0">
          <a-gltf-model src="#satellite" />
        </a-entity>
        <a-entity scale="0.1 0.1 0.1" position="89.062 14.391 -85.107">
          <a-gltf-model id="crystalBall" src="#crystal-ball" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"/>
        </a-entity>
        <a-entity>
          <a-sky src="src/assets/bg-world.jpg" />
        </a-entity>
        <a-entity position="0 -5 0">
          <a-gltf-model src="src/assets/ground-world.glb" />
        </a-entity>
        <a-camera position="0 7 0">
          <a-entity position="0 -5 0" rotation="0 180 0">
            <a-gltf-model src="src/assets/amongUs.glb" />
          </a-entity>
        </a-camera>
      </a-scene>
    </>
  );
};

export default WorldContainer;
