import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MobileStepper,
  Typography,
} from '@mui/material';

const MuseumDialog = ({ isOpen, setOpen, satellite }) => {
  let launchDate = satellite.launchDate;
  let year = '';
  let month = '';
  let day = '';
  if (launchDate) {
    year = launchDate[0];
    month = launchDate[1];
    day = launchDate[2];
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{satellite.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          발사 일자 : {year}년 {month}월 {day}일
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          {satellite.desc}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuseumDialog;
