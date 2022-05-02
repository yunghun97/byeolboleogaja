import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { Box, Container, LinearProgress, Typography } from '@mui/material';
import LoadingBackground from '@/components/LoadingBackground';

const LoadingScene = () => {
  const [progress, setProgress] = useState(0);
  const loadingBg = useStore((state) => state.apodUrl);
  const loadingMsg =
    '수성, 금성, 화성의 질량을 다 합쳐도 지구의 질량보다 작습니다.';

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 12;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <LoadingBackground bgUrl={loadingBg} />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            mt: '60vh',
            color: '#ffffff',
            fontSize: '5rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          로 딩 중
        </Typography>
        <Box sx={{ mt: '2vh', width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Typography
          sx={{
            mt: '5vh',
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {loadingMsg}
        </Typography>
      </Container>
    </>
  );
};

export default LoadingScene;
