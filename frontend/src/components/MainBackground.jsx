import Box from '@mui/material/Box';
import mainBg from '@/assets/bg-main.png';

const MainBackground = () => {
  return (
    <Box
      component="img"
      src={mainBg}
      sx={{
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: '-100',
      }}
    />
  );
};

export default MainBackground;
