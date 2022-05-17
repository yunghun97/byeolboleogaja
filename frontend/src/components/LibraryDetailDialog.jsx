import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function LibraryDetailDialog ({title, open, setOpen, content}) {
  useEffect(() => {
    console.log(setOpen);
    console.log(open);
  })

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} sx={{ minWidth: 275 }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{content}</Typography>
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="contained" onClick={handleClose}>X</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LibraryDetailDialog;