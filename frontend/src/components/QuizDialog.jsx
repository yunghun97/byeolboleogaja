import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { getQuiz } from '@/api/quiz';
import { quizDefault } from '@/constants';
import ReadyDialog from '@/components/ReadyDialog';
import FlaggingDialog from './FlaggingDialog';

const QuizDialog = ({ open, setOpen }) => {
  const [isopen, setOpened] = useState(false);
  const [quiz, setQuiz] = useState(quizDefault);
  const [reply, setReply] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [count, setCount] = useState(0);
  const maxSteps = quiz.length * 2;

  const initQuiz = async () => {
    try {
      const res = await getQuiz();
      setQuiz(res.data);
      setCount(0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (open) {
      setActiveStep(0);
      initQuiz();
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleClickYes = () => {
    setReply(true);
    if (quiz[Math.floor(activeStep / 2)].answer === true) {
      setCount((count) => count + 1);
    }
    handleNext();
  };

  const handleClickNo = () => {
    setReply(false);
    if (quiz[Math.floor(activeStep / 2)].answer === false) {
      setCount((count) => count + 1);
    }
    handleNext();
  };

  const handleCheck = () => {
    if (activeStep === maxSteps - 1) {
      setOpen(false);
      setOpened(true);
    } else {
      handleNext();
    }
  };

  return (
    <>
      <Dialog fullWidth maxWidth="md" open={open}>
        {activeStep % 2 == 0 ? (
          <>
            <DialogTitle>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                OX Quiz {count}
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
                {`${quiz[Math.floor(activeStep / 2)].question}`}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                sx={{ m: 1, width: '50%' }}
                onClick={handleClickNo}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  X
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{ m: 1, width: '50%' }}
                onClick={handleClickYes}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  O
                </Typography>
              </Button>
              <Button
                sx={{ position: 'absolute', top: '8px', right: '8px' }}
                onClick={handleClose}
              >
                <CloseIcon />
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                {reply === quiz[Math.floor(activeStep / 2)].answer
                  ? '정답!'
                  : '오답!'}
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
                {reply === quiz[Math.floor(activeStep / 2)].answer
                  ? '정답이야!'
                  : '틀렸어!'}
                &nbsp;
                {`${quiz[Math.floor(activeStep / 2)].description}`}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                sx={{ m: 1, width: '50%' }}
                onClick={handleCheck}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  그렇구나!
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{ m: 1, width: '50%' }}
                onClick={handleCheck}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  와~ 신기하다!
                </Typography>
              </Button>
              <Button
                sx={{ position: 'absolute', top: '8px', right: '8px' }}
                onClick={handleClose}
              >
                <CloseIcon />
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      {/* <ReadyDialog open={isopen} setOpen={setOpened} /> */}
      <FlaggingDialog open={isopen} setOpen={setOpened} count={count} />
    </>
  );
};

export default QuizDialog;
