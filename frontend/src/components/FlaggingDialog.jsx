import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { addFlag } from '@/api/flag';
import SimpleDialog from '@/components/SimpleDialog';

const FlaggingDialog = ({ open, setOpen, count }) => {
  const $nickname = useStore((state) => state.nickname);
  const [msg, setMsg] = useState('');

  const [simpleOpen, setSimpleOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFlagging = async () => {
    try {
      const flagInfo = {
        content: msg,
        nickname: $nickname,
        password: '',
      };
      const res = await addFlag(flagInfo);
      setSimpleOpen(true);
    } catch (error) {
      console.error(error);
    }
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth maxWidth="md" open={open}>
        <DialogTitle>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            달토끼
          </Typography>
        </DialogTitle>
        <DialogContent>
          {count === 3 ? (
            <>
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                오!! 3문제를 다 맞히다니!! 너 정말 똑똑하구나!! 약속대로 깃발을
                꽂게 해줄게!! 깃발에 새길 글귀를 적어줘!!
              </Typography>
              <TextField
                autoFocus
                id="name"
                label="깃발에 새길 글귀"
                defaultValue={msg}
                variant="outlined"
                sx={{
                  mt: 3,
                  display: 'flex',
                }}
                onChange={(e) => setMsg(e.target.value)}
              />
            </>
          ) : (
            <Typography
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              오.. {count}문제를 맞혔구나..!! 아쉽게도 3문제를 모두 맞혀야만
              깃발을 꽂아 주고 있어..!! 깃발을 막 꽂게 해주면 재미없잖아!!
              그치?! 다시 한 번 도전해줘!!
            </Typography>
          )}
        </DialogContent>

        <DialogActions>
          {count === 3 ? (
            <>
              <Button
                variant="outlined"
                sx={{ m: 1, width: '50%' }}
                onClick={handleClose}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  아냐 안 꽂을래!
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{ m: 1, width: '50%' }}
                onClick={handleFlagging}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  이 글귀로 할래!
                </Typography>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                sx={{ m: 1, width: '50%' }}
                onClick={handleClose}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  너무해!
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{ m: 1, width: '50%' }}
                onClick={handleClose}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  알겠어!
                </Typography>
              </Button>
            </>
          )}
          <Button
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
      <SimpleDialog
        open={simpleOpen}
        setOpen={setSimpleOpen}
        who={'달토끼'}
        message={
          '오!! 정말 멋진 글귀인걸?! 글귀는 잘 받았으니, 내가 정리해서 뒤에 꽂아 둘게!!'
        }
      />
    </>
  );
};

export default FlaggingDialog;
