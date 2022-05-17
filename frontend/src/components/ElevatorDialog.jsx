import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
const ElevatorDialog = ({
  info,
  elevatorIntoOpen,
  activeFloor,
  setElevatorIntoOpen,
  nowFloor,
  floor,
  setControlFloor,
}) => {
  const navigate = useNavigate();
  const handleLink = () => {
    if (nowFloor !== floor) {
      if (activeFloor === 0) {
        navigate('/museum');
      }
      if (activeFloor === 1) {
        navigate('/museum/gallery');
      }
    } else {
      setControlFloor(true);
    }
  };

  const handleClose = () => {
    setElevatorIntoOpen(false);
  };
  return (
    <Dialog
      open={elevatorIntoOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {info[activeFloor].floor}
      </DialogTitle>
      <DialogContent sx={{ whiteSpace: 'pre-line' }}>
        {/* <DialogContentText id="alert-dialog-description">
          발사 일자 : {year}년 {month}월 {day}일
        </DialogContentText> */}

        {info[activeFloor].description}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLink} variant="contained">
          이동
        </Button>
        <Button onClick={handleClose} variant="contained">
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ElevatorDialog;
