import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';

import logoMain from '@/assets/logo-main.png';

export default function MainPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 14,
        mb: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Main Page</h2>
      <Box component="img" src={logoMain} sx={{ height: '30vw' }} />
      <Button component={Link} to="/world" variant="contained">
        시작하기
      </Button>
    </Container>
  );
}
