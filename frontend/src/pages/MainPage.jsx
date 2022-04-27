import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';

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
      <Button component={Link} to="/world" variant="contained">
        시작하기
      </Button>
    </Container>
  );
}
