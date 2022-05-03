import 'aframe';

const WorldContainer = () => {
  return (
    <a-scene>
      <a-assets>
        <a-asset-item id="fountain" src="src/assets/fountain.glb"></a-asset-item>
        <a-asset-item id="library" src="src/assets/library.glb"></a-asset-item>
        <a-asset-item id="observatory" src="src/assets/observatory.glb"></a-asset-item>
        <a-asset-item id="spaceship" src="src/assets/spaceship.glb"></a-asset-item>
        <a-asset-item id="science-museum" src="src/assets/science-museum.glb"></a-asset-item>
        <a-asset-item id="satellite" src="src/assets/satellite.glb"></a-asset-item>
      </a-assets>
      <a-sky src="src/assets/bg-world.jpg" />
      <a-gltf-model src="src/assets/ground-world.glb" />
      <a-entity position="0 10 0">
        <a-camera id="camera" />
      </a-entity>
      <a-entity scale="10 10 10" position="-63.970 23.804 -116.629">
        <a-gltf-model src="#fountain" />
      </a-entity>
      <a-entity position="69.672 20.323 -192.333" rotation="0 90 0">
        <a-gltf-model src="#library" />
      </a-entity>
      <a-entity scale="100 100 100" position="41.511 29.884 -56.011" rotation="0 90 0">
        <a-gltf-model src="#observatory" />
      </a-entity>
      <a-entity scale="100 100 100" position="-67.182 0 -262.203">
        <a-gltf-model src="#spaceship" />
      </a-entity>
      <a-entity scale="2 2 2" position="-51.368 4.456 -51.946">
        <a-gltf-model src="#science-museum" />
      </a-entity>
      <a-entity scale="100 100 100" position="-68.910 46.147 -61.601" rotation="0 55.643 0">
        <a-gltf-model src="#satellite" />
      </a-entity>
    </a-scene>
  );
};

export default WorldContainer;
