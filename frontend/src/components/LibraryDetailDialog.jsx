import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

function LibraryDetailDialog ({title, content, open, setOpen}) {
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