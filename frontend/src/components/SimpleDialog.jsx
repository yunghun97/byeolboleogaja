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

const SimpleDialog = ({ open, setOpen, who, message }) => {
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
            {who}
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
            {message}
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
              야호!
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

export default SimpleDialog;
