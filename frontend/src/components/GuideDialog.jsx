import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Typography,
} from '@mui/material';

const GuideDialog = ({ guideInfos }) => {
  const [open, setOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = guideInfos.length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {guideInfos[activeStep].title}
        </Typography>
      </DialogTitle>
      <Box
        component="img"
        src={guideInfos[activeStep].imgPath}
        sx={{ m: 1 }}
      ></Box>
      <DialogContent>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {guideInfos[activeStep].description}
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
            이전 페이지
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ m: 1, width: '50%' }}
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            다음 페이지
          </Typography>
        </Button>
        <Button
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
          onClick={handleClose}
        >
          SKIP
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GuideDialog;
