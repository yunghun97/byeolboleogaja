import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import QuizDialog from '@/components/QuizDialog';

const PlanetDialog = ({ planetInfos, open, setOpen }) => {
  const [isopen, setOpened] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = planetInfos.length;

  useEffect(() => {
    setActiveStep(0);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setOpen(false);
      setOpened(true);
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
            component="h1"
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
            component="body1"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {planetInfos[activeStep].description}
          </Typography>
        </DialogContent>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={<Button></Button>}
          backButton={<Button></Button>}
        />
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
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
      <QuizDialog open={isopen} setOpen={setOpened} />
    </>
  );
};

export default PlanetDialog;
