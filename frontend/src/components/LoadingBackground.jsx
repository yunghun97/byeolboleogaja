import Box from '@mui/material/Box';
import mainBg from '@/assets/bg-main.png';

const LoadingBackground = () => {
  return (
    <Box
      component="img"
      src={mainBg}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: '-100',
      }}
    />
  );
};

export default LoadingBackground;
