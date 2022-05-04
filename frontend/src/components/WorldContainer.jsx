import 'aframe';

const WorldContainer = () => {
  return (
    <>
      <a-scene>
        <a-assets>
          <a-asset-item id="ground" src="src/assets/ground-world.glb"></a-asset-item>
          <a-asset-item id="library" src="src/assets/library.glb"></a-asset-item>
          <a-asset-item id="observatory" src="src/assets/observatory.glb"></a-asset-item>
          <a-asset-item id="spaceship" src="src/assets/spaceship.glb"></a-asset-item>
          <a-asset-item id="science-museum" src="src/assets/science-museum.glb"></a-asset-item>
          <a-asset-item id="satellite" src="src/assets/satellite.glb"></a-asset-item>
          <a-asset-item id="witch-house" src="src/assets/witch-house.glb"></a-asset-item>
        </a-assets>
        <a-sky src="src/assets/bg-world.jpg" />
        <a-gltf-model src="#ground" position="0 -5 0" rotation="0 -2 0" />
        <a-gltf-model src="#library" position="82.276 14.178 -204.775" rotation="0 90 0" />
        <a-gltf-model src="#observatory" scale="120 120 120" position="41.511 25 -56.011" rotation="0 90 0" />
        <a-gltf-model src="#spaceship" scale="100 100 100" position="-60.211 -1.030 -262.203" />
        <a-gltf-model src="#science-museum" scale="2.3 2.3 2.3" position="-54.671 0 -86.823" />
        <a-gltf-model src="#satellite" scale="100 100 100" position="-69.931 45.263 -98.965" rotation="0 55.643 0" />
        <a-gltf-model src="#witch-house" scale="0.3 0.3 0.3" position="-83.652 15.925 -359.571" rotation="179.947 0 -179.957"/>
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
