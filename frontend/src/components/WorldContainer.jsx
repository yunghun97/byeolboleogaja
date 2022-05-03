import 'aframe';

const WorldContainer = () => {
  return (
    <>
      <a-scene>
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
