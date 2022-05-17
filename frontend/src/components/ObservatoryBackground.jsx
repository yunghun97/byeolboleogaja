import { Box } from '@mui/material';
import bg from '@/assets/img/observatory/bg-observatory-3.jpg';

const ObservatoryBackground = () => {
  return (
    <Box
      component="img"
      src={bg}
      sx={{
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        opacity: '0.7',
        objectFit: 'cover',
        position: 'fixed',
        zIndex: '-100',
      }}
    />
  );
};

export default ObservatoryBackground;
