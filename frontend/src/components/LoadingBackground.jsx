import { Box } from '@mui/material';

const LoadingBackground = ({ bgUrl }) => {
  return (
    <Box
      component="img"
      src={bgUrl}
      sx={{
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'fixed',
        zIndex: '9999',
      }}
    />
  );
};

export default LoadingBackground;
