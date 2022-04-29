import 'aframe';

const WorldContainer = () => {
  return (
    <a-scene>
      <a-sky src="src/assets/bg-world.jpg" />
      <a-gltf-model src="src/assets/ground-world.glb" />
      <a-entity position="0 10 0">
        <a-camera id="camera" />
      </a-entity>
    </a-scene>
  );
};

export default WorldContainer;
