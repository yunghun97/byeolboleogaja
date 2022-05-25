import { useEffect, useState } from 'react';
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

const PrivateMsgDialog = ({ open, setOpen, author, handleSendPrivateMsg }) => {
  const [msg, setMsg] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMsg = () => {
    if (msg === '') {
      return;
    }

    handleSendPrivateMsg(msg);

    setMsg('');
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
            {`${author}에게 귓속말 보내기`}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="귓속말 내용"
            defaultValue={msg}
            variant="outlined"
            sx={{
              mt: 3,
              display: 'flex',
            }}
            onChange={(e) => setMsg(e.target.value)}
          />
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
              취소
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1, width: '50%' }}
            onClick={handleSendMsg}
          >
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              귓속말 보내기
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

export default PrivateMsgDialog;
