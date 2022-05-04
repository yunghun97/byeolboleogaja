import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store';
import {
  Box,
  Button,
  Container,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

import logoMain from '@/assets/logo-main.png';

const MainContainer = () => {
  const navigate = useNavigate();
  const $setNickname = useStore((state) => state.setNickname);

  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');

  const [isNickname, setIsNickname] = useState(true);

  useEffect(() => {
    validateNickname();
  }, [nickname]);

  const validateNickname = () => {
    setIsNickname(nickname !== '');
  };

  const initNickname = () => {
    setNickname(getRandomNickname);
  };

  const getRandomNickname = () => {
    const a = '익명의';
    const b = ['곰돌이', '낙타', '갱얼쥐', '호모사피엔스'][
      Math.floor(Math.random() * 4)
    ];
    const c = Math.floor(Math.random() * 10000);

    return `${a} ${b} #${c}`;
  };

  const handleJoinWorld = () => {
    if (!isNickname) {
      return;
    }

    $setNickname(nickname);

    navigate('/worldmap');
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleClickOpen = () => {
    initNickname();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Button variant="contained" sx={{ mt: '5vh' }} onClick={handleClickOpen}>
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
      <Dialog maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle>닉네임 입력하기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            별보러가자에서는 입장 시 입력한 닉네임을 바탕으로 소통합니다! 멋진
            닉네임으로 입장해주세요!
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="닉네임"
            defaultValue={nickname}
            variant="outlined"
            sx={{
              mt: 3,
              display: 'flex',
            }}
            onChange={handleNicknameChange}
            error={!isNickname}
            helperText={!isNickname ? '닉네임은 공백일 수 없습니다.' : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleJoinWorld}>
            입장하기
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            돌아가기
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MainContainer;
