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
      </a-assets>
      <a-sky src="src/assets/bg-world.jpg" />
      <a-gltf-model src="src/assets/ground-world.glb" />
      <a-entity position="0 10 0">
        <a-camera id="camera" />
      </a-entity>
      <a-entity scale="10 10 10" position="-63.970 23.804 -116.629">
        <a-gltf-model src="#fountain" />
      </a-entity>
      <a-entity position="77.600 20.323 -192.333" rotation="0 90 0">
        <a-gltf-model src="#library" />
      </a-entity>
      <a-entity scale="100 100 100" position="84.404 28.755 -89.771">
        <a-gltf-model src="#observatory" />
      </a-entity>
      <a-entity scale="100 100 100" position="-67.182 0 -262.203">
        <a-gltf-model src="#spaceship" />
      </a-entity>
      <a-entity scale="1.5 1.5 1.5" position="-47.915 4.456 -45.260">
        <a-gltf-model src="#science-museum" />
      </a-entity>
    </a-scene>
  );
};

export default WorldContainer;
