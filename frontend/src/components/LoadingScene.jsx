import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { Box, Container, LinearProgress, Typography } from '@mui/material';
import LoadingBackground from '@/components/LoadingBackground';
import { getCommonSence } from '@/api/loading';
import bg from '@/assets/img/loading/bg-loading-1.jpg';

const LoadingScene = ({ loadingTime }) => {
  const [progress, setProgress] = useState(0);
  const loadingBg = useStore((state) => state.apodUrl);
  const [loadingMsg, setLoadingMsg] = useState('');

  useEffect(() => {
    initLoadingMsg();

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = 10000 / loadingTime; // loadingTime 을 참고해서 적당한 값 적용
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const initLoadingMsg = async () => {
    const res = await getCommonSence();
    setLoadingMsg(res.data.commonSense);
  };

  return (
    <>
      <LoadingBackground bgUrl={bg} />
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
            mt: '5vh',
            color: '#ffffff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Astronomy Picture of the Day
        </Typography>
        <Box
          component="img"
          src={loadingBg}
          sx={{ mt: '1.5vh', height: '60vh' }}
        />
        <Typography
          sx={{
            mt: '5vh',
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          알고계셨나요?
        </Typography>
        <Box sx={{ mt: '2vh', width: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: '2vh', borderRadius: 5 }}
          />
        </Box>
        <Typography
          sx={{
            mt: '3vh',
            color: '#ffffff',
            fontSize: '1.7rem',
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
