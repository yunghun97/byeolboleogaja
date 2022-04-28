import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

import logoMain from '@/assets/logo-main.png';

const MainContainer = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={logoMain}
        sx={{
          mt: '20vh',
          height: '50vh',
        }}
      />
      <Button
        component={Link}
        to="/world"
        variant="contained"
        sx={{ mt: '5vh' }}
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
    </Container>
  );
};

export default MainContainer;
