import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { characterInfo } from '@/constants';

const CharacterSelect = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        캐릭터 선택하기
      </Typography>
    </Container>
  );
};
export default CharacterSelect;
