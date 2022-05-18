import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

function LibraryDetailDialog ({detailInfo, open, setOpen}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} sx={{ minWidth: 275 }}>
        <DialogTitle>{detailInfo.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{detailInfo.content}</Typography>
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="contained" onClick={handleClose}>X</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LibraryDetailDialog;