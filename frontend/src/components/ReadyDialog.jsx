import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const ReadyDialog = ({ open, setOpen }) => {
  const handleClose = () => {
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
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            아앗....지금 깃발이 없어서 꽂을 수가 없어.. 다음에 다시 와줘! 내가
            이름 기억해둘게!
          </Typography>
        </DialogContent>

        <DialogActions>
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
          <Button
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ReadyDialog;
