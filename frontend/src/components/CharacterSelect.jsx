import { characterInfo } from '@/constants';
import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Typography,
  useTheme,
} from '@mui/material';
const CharacterSelect = () => {
  const navigate = useNavigate();
  const $setCharacterColor = useStore((state) => state.setCharacterColor);
  const [characterColor, setCharacterColor] = useState('');
  const theme = useTheme();
  const open = true;
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = characterInfo.length;

  useEffect(() => {
    setActiveStep(0);
    setCharacterColor(characterInfo[activeStep].mdl);
  }, [open]);

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSubmit = () => {
    $setCharacterColor(characterColor);
    navigate('/worldmap');
  };
  return (
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
          캐릭터 선택하기
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography
          component="body1"
          sx={{
            fontSize: '1.2rem',
            textTransform: 'none',
          }}
        >
          {characterInfo[activeStep].title}
          {characterInfo[activeStep].mdl}
        </Typography>
      </DialogContent>
      <DialogContent>
        <Box
          component="img"
          src={characterInfo[activeStep].imgPath}
          sx={{
            maxWidth: 'md',
            ml: 2,
            mr: 2,
          }}
        ></Box>
      </DialogContent>
      <MobileStepper
        variant="dots"
        steps={characterInfo.length}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === characterInfo.length - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <DialogActions>
        <Button
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
          onClick={handleSubmit}
        >
          선택
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CharacterSelect;
