import movement from '@/assets/img/world/img-movement.png';
import observatory from '@/assets/img/world/img-observatory.png';
import library from '@/assets/img/world/img-library.png';
import museum from '@/assets/img/world/img-museum.png';
import spaceship from '@/assets/img/world/img-spaceship.png';
import astrology from '@/assets/img/world/img-astrology.png';
import guidecharacter from '@/assets/img/observatory/img-guidecharacter.png';

const worldGuideInfos = [
  {
    title: '방향키 이동',
    description: '상하좌우 방향키와 wasd키로 월드맵을 이동할 수 있고, 마우스로 시점을 전환할 수 있어요.',
    imgPath: movement,
  },
  {
    title: '천문대',
    description:
      '천문대에 진입하면 현재 위치의 하늘에 떠있는 별을 관측하거나 오로라를 볼 수 있어요.',
    imgPath: observatory,
  },
  {
    title: '도서관',
    description:
      '도서관에 진입하면 별자리 이야기, 우주에 관한 상식, 우주비행사 이야기, 행성 이야기를 열람할 수 있어요.',
    imgPath: library,
  },
  {
    title: '우주 박물관',
    description: '우주 박물관에 진입하면 1층에서는 인공위성 3D 모델을 관람할 수 있고, 2층에서는 허블 망원경으로 촬영된 우주 사진을 관람할 수 있어요.',
    imgPath: museum,
  },
  {
    title: '우주선',
    description:
      '우주선을 타고 달로 이동하여 토끼를 만나 퀴즈를 풀어볼 수 있어요.',
    imgPath: spaceship,
  },
  {
    title: '오늘의 운세',
    description: '자신의 별자리에 따른 오늘의 운세를 확인할 수 있어요.',
    imgPath: astrology,
  },
  {
    title: '별 보러 가자!',
    description:
      '월드맵 우측 하단의 메뉴 바를 통해 언제든지 가이드 다시보기, 월드로 돌아가기, 배경음악 조절을 할 수 있어요.',
    imgPath: guidecharacter,
  },
];

export default worldGuideInfos;
