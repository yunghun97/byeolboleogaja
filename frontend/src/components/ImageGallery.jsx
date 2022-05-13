import 'aframe';
import gallery from '@/assets/model/museum/mdl-gallery.glb?url';
import amongUs from '@/assets/model/common/mdl-amongus.glb?url';
import eagleNebula from '@/assets/img/museum/img-EagleNebula.png?url';
import GalaxyCluster from '@/assets/img/museum/img-GalaxyClusterSDSSJ1531+3414.jpg?url';
const ImageGallery = () => {
  return (
    <a-scene>
      <a-assets></a-assets>
      <a-gltf-model id="gallery" rotation="0 90 0" src={gallery} />

      <a-image
        position="-8.3 5.0 28"
        src={eagleNebula}
        width="8"
        height="5"
      ></a-image>
      <a-text
        value="Pillars of Creation - Eagle Nebula (M16)\n 창조의 기둥 - 독수리 성운 \n별자리: 뱀 \n거리: 6,500광년(2,000파섹)"
        color="#FFFFFF"
        shader="msdf"
        font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
        position="-10.3 1.5 28"
      ></a-text>
      <a-image
        position="8.3 5.0 28"
        src={GalaxyCluster}
        width="5.2"
        height="3.5"
      ></a-image>
      <a-text
        value="GALAXY CLUSTER SDSS J1531+3414 \n 은하단 \n별자리: 북쪽 왕관 자리 \n거리: 파란색의 과녁 중심 100,000광년"
        color="#FFFFFF"
        shader="msdf"
        font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-Regular.json"
        position="6.5 1.8 28"
      ></a-text>
      <a-entity
        id="camera"
        camera="active: true"
        position="0 4 40"
        wasd-controls="acceleration:50"
        look-controls="mouseEnabled:true"
      ></a-entity>
    </a-scene>
  );
};
export default ImageGallery;
