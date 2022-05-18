import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { Close as CloseIcon } from '@mui/icons-material';

const GuideImg = styled.img`
  width: 100%;
`

function WorldGuideDialog ({ guideInfos, open, setOpen }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = guideInfos.length;

  useEffect(() => {
    setActiveStep(0);
  }, [open]);

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
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {guideInfos[activeStep].title}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClose}
          >
          <CloseIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <GuideImg src={guideInfos[activeStep].imgPath} alt="world guide image"/>
        <Typography
          sx={{
            height:  '40px',
          }}
        >
          {guideInfos[activeStep].description}
        </Typography>
      </DialogContent>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<Button disabled></Button>}
        backButton={<Button disabled></Button>}
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
      </DialogActions>
    </Dialog>
    );
  };
  
  export default WorldGuideDialog;