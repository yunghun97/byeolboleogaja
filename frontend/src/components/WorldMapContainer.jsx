import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store';
import { Box, Button, Container, Typography } from '@mui/material';
import ChatWindow from '@/components/ChatWindow';

const WorldMapContainer = () => {
  const navigate = useNavigate();
  const nickname = useStore((state) => state.nickname);

  const handleGoWorld = () => {
    navigate('/world');
  };

  const handleGoObservatory = () => {
    navigate('/observatory');
  };

  const handleGoLibrary = () => {
    navigate('/vite');
  };

  const handleGoFortune = () => {
    navigate('/horoscope');
  };

  const handleGoMuseum = () => {
    navigate('/museum');
  };

  const handleGoSpace = () => {
    navigate('/vite');
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          mt: '5vh',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        {`${nickname} 님 반가워요!`}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
        onClick={handleGoWorld}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          ★ 월드 입장 ★
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
        onClick={handleGoObservatory}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          별 보러 가기
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
        onClick={handleGoLibrary}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          도서관 가기
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
        onClick={handleGoFortune}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          별자리 운세 보기
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
        onClick={handleGoMuseum}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          인공위성 박물관 가기
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ mt: '5vh', width: 'min(375px, 90%)' }}
        onClick={handleGoSpace}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          우주여행 하기
        </Typography>
      </Button>
      <Box
        sx={{
          width: 'min(730px, 75%)',
          position: 'fixed',
          left: '1vw',
          bottom: '1vh',
          zIndex: 999,
        }}
      >
        <ChatWindow />
      </Box>
    </Container>
  );
};

export default WorldMapContainer;
