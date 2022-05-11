import movement from '@/assets/img/world/img-movement.png';
import chat from '@/assets/img/world/img-chat.png';
import observatory from '@/assets/img/world/img-observatory.png';
import library from '@/assets/img/world/img-library.png';
import museum from '@/assets/img/world/img-museum.png';
import spaceship from '@/assets/img/world/img-spaceship.png';
import astrology from '@/assets/img/world/img-astrology.png';
import guidecharacter from '@/assets/img/observatory/img-guidecharacter.png';

const worldGuideInfos = [
  {
    title: '방향키 이동',
    description: '상하좌우 방향키로 월드맵을 이동할 수 있고, 마우스로 시점을 전환할 수 있어요.',
    imgPath: movement,
  },
  {
    title: '채팅',
    description:
      '주변 유저들과 함께 채팅을 즐길 수 있어요.',
    imgPath: chat,
  },
  {
    title: '천문대',
    description:
      '천문대에 진입하면 스텔라리움 오픈소스를 활용하여 현재 위치의 밤하늘을 볼 수 있어요.',
    imgPath: observatory,
  },
  {
    title: '도서관',
    description:
      '도서관에 진입하면 별자리 설화, 천체에 관련한 도서를 열람할 수 있어요.',
    imgPath: library,
  },
  {
    title: '인공위성 박물관',
    description: '인공위성 박물관에 진입하면 허블 우주 망원경, 제임스 웹 우주 망원경 등 인공위성을 관람할 수 있어요.',
    imgPath: museum,
  },
  {
    title: '우주선',
    description:
      '우주선을 타고 달로 이동하여 토끼를 만나고 달 표면에 깃발을 꽂을 수 있어요.',
    imgPath: spaceship,
  },
  {
    title: '오늘의 운세',
    description: '점성술사가 알려주는 별자리에 따른 오늘의 운세를 확인할 수 있어요.',
    imgPath: astrology,
  },
  {
    title: '별 보러 가자!',
    description:
      '월드맵 우측 하단의 \'?\' 아이콘을 클릭하면 언제든지 조작 안내 팝업을 다시 볼 수 있어요.',
    imgPath: guidecharacter,
  },
];

export default worldGuideInfos;
