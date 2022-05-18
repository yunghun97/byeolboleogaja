import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

const PlanetDialog = ({
  planetInfos,
  open,
  setOpen,
  quizOpen,
  setQuizOpen,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = planetInfos.length;

  useEffect(() => {
    setActiveStep(0);
  }, [quizOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setOpen(false);
      setQuizOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === maxSteps - 1) {
      setOpen(false);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
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
            {planetInfos[activeStep].title}
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
            {planetInfos[activeStep].description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{ m: 1, width: '50%' }}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              {activeStep === maxSteps - 1 ? '아니, 안할래!' : '이전'}
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1, width: '50%' }}
            onClick={handleNext}
          >
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              {activeStep === maxSteps - 1 ? '응, 할래!' : '다음'}
            </Typography>
          </Button>
          <Button
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={handleClose}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PlanetDialog;
