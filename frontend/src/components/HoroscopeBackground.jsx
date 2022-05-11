import { Box } from '@mui/material';
import horoscopeBg from '@/assets/img/horoscope/bg-horoscope.png';

const HoroscopeBackground = () => {
  return (
    <Box
      component="img"
      src={horoscopeBg}
      sx={{
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        opacity: '0.87',
        objectFit: 'cover',
        position: 'fixed',
        zIndex: '-100',
      }}
    />
  );
};

export default HoroscopeBackground;
