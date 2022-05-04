import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import GuideDialog from '@/components/GuideDialog';

export default function Observatory() {
  const guideInfos = [
    {
      title: '별 보러 가자 Stellarium 이용 가이드',
      description: 'Stellarium의 기본적인 사용법을 알려드릴게요!',
      imgPath: 'src/assets/observatory/img-guidecharacter.png',
    },
    {
      title: '별을 보고 싶은 지역 선택',
      description:
        '왼쪽 하단의 버튼을 클릭해서, 별을 보고 싶은 지역을 선택할 수 있어요!',
      imgPath: 'src/assets/observatory/img-locationsetting.png',
    },
    {
      title: '별자리 보기 및 천체 가이드 ON/OFF',
      description:
        '하단의 버튼들을 ON/OFF 할 수 있어요! 별자리도 볼 수 있답니다!',
      imgPath: 'src/assets/observatory/img-starguidesetting.png',
    },
    {
      title: '별의 정보 보기',
      description:
        '하늘의 별을 클릭해보세요! 해당 별의 정보를 확인할 수 있습니다.',
      imgPath: 'src/assets/observatory/img-stardesc.png',
    },
    {
      title: '별 확대해서 보기',
      description: '별을 확대해서 볼 수도 있어요!',
      imgPath: 'src/assets/observatory/img-starzoom.png',
    },
    {
      title: '시간 설정',
      description:
        '시간을 설정할 수 있습니다! 별을 보려면 아무래도 밤 시간이 좋겠죠?',
      imgPath: 'src/assets/observatory/img-timesetting.png',
    },
    {
      title: '월드로 돌아가기',
      description:
        '월드로 돌아가기 버튼으로 원래 있던 월드로 돌아갈 수 있어요!',
      imgPath: 'src/assets/observatory/img-returnworld.png',
    },
    {
      title: '별 보러 가자',
      description:
        '이 밖에도 다양한 기능이 있어요! Stellarium으로 멋진 밤하늘을 감상해보세요!',
      imgPath: 'src/assets/observatory/img-guidecharacter.png',
    },
  ];

  return (
    <>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000000' }}>
        <iframe
          src="https://stellarium-web.org/"
          width={'100%'}
          height={'99%'}
          allowFullScreen
          style={{ border: 'none' }}
        ></iframe>
        <Button
          component={Link}
          to="/world"
          variant="contained"
          sx={{
            width: 'min(192px, 30%)',
            position: 'absolute',
            bottom: '30vh',
            right: '8px',
            zIndex: 1000,
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            월드로 돌아가기
          </Typography>
        </Button>
        <GuideDialog guideInfos={guideInfos} />
      </Box>
    </>
  );
}
