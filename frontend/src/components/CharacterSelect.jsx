import { characterInfo } from '@/constants';
import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import {
  Circle, Public as PublicIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from '@mui/material';

const CharacterSelect = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(characterInfo);
  const $setCharacterColor = useStore((state) => state.setCharacterColor);

  const theme = useTheme();
  const open = true;
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = characterInfo.length;

  useEffect(() => {
    setActiveStep(0);
  }, [open]);

  const handleSubmit = async () => {
    $setCharacterColor(info[activeStep].mdl);
    navigate('/worldmap');
  };

  return (
    <Dialog maxWidth="md" open={open}>
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
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <IconButton>
            <Circle sx={{ color: '#f50057' }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#ffc400' }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#ffee33' }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#8bc34a' }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#2979ff' }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#9c27b0' }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#dd33fa' }} />
          </IconButton>
          <IconButton>
            <Circle
              sx={{
                color: '#FFFFFF',
                border: '1px solid grey',
                borderRadius : '50%',  
              }} />
          </IconButton>
          <IconButton>
            <Circle sx={{ color: '#0d0d0d' }} />
          </IconButton>
        </div>
        <Box
          component="img"
          src={characterInfo[activeStep].imgPath}
          sx={{
            width: '100%',
            borderRadius: '5px',
          }}
        ></Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" startIcon={<PublicIcon />} onClick={handleSubmit}>
          <Typography>
            별 보러 가기
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CharacterSelect;
