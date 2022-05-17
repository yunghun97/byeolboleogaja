import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imgStellar from '@/assets/img/observatory/bg-observatory-1.jpg';
import imgStarSpot from '@/assets/img/observatory/bg-observatory-2.jpg';

const ObservatoryContainer = () => {
  const navigate = useNavigate();

  const handleOpenStellar = () => {
    navigate('/observatory/stellar');
  };

  const handleOpenSpot = () => {
    navigate('/observatory/spot');
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: 14,
        pb: 14,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ m: 2, width: '50%', textAlign: 'center' }}>
        <Typography
          sx={{
            m: 1,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Stellarium
        </Typography>
        <Box
          component="img"
          src={imgStellar}
          sx={{
            m: 1,
            width: '90%',
            height: '50vh',
            objectFit: 'cover',
          }}
        ></Box>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {'3D 밤하늘을 웹에서 즐겨보세요!'}
        </Typography>
        <Button variant="contained" onClick={handleOpenStellar} sx={{ m: 1 }}>
          보러가기
        </Button>
      </Paper>
      <Paper sx={{ m: 2, width: '50%', textAlign: 'center' }}>
        <Typography
          sx={{
            m: 1,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          360° Star View
        </Typography>
        <Box
          component="img"
          src={imgStarSpot}
          sx={{ m: 1, width: '90%', height: '50vh', objectFit: 'cover' }}
        ></Box>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {'실제 밤하늘을 보러 가볼까요?'}
        </Typography>
        <Button variant="contained" onClick={handleOpenSpot} sx={{ m: 1 }}>
          보러가기
        </Button>
      </Paper>
    </Container>
  );
};

export default ObservatoryContainer;
