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

const FlagInfoDialog = ({ open, setOpen, info }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" open={open}>
        <DialogTitle>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {info.nickname} 의 깃발
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              m: 1,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {`" ${info.content} "`}
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontSize: '0.7rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {`${info.createdDate[0]}년${info.createdDate[1]}월${info.createdDate[2]}일 ${info.createdDate[3]}시${info.createdDate[4]}분${info.createdDate[5]}초`}
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
              오우...
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
              멋진 글귀구만!
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

export default FlagInfoDialog;
