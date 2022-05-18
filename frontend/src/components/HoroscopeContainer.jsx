import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { zodiac, horoscopeDefault } from '@/constants';
import { getHoroscope } from '@/api/horoscope';

const HoroscopeContainer = () => {
  const [open, setOpen] = useState(false);
  const [horoscope, setHoroscope] = useState(horoscopeDefault);
  const [horoIndex, setHoroIndex] = useState(0);

  useEffect(() => {
    document.querySelector('html').className = '';
    initHoroscope();
  }, []);

  const initHoroscope = async () => {
    const res = await getHoroscope();
    setHoroscope(res.data);
  };

  const handleOpenHoroscope = (e) => {
    const idx = e.target.value;
    setHoroIndex(idx);
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ m: 7, flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2, lg: 2, xl: 2 }}
          coloumns={{ xs: 8, sm: 8, md: 12 }}
        >
          {zodiac.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
              <Paper sx={{ textAlign: 'center' }}>
                <Box
                  component="img"
                  src={item.imgPath}
                  sx={{ m: 1, width: '90%' }}
                ></Box>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  value={index}
                  onClick={handleOpenHoroscope}
                  sx={{ m: 1 }}
                >
                  운세보기
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {`${horoscope[horoIndex].createdDate[0]}년 ${horoscope[horoIndex].createdDate[1]}월 ${horoscope[horoIndex].createdDate[2]}일`}
          </Typography>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {`${horoscope[horoIndex].category} 운세`}
          </Typography>
        </DialogTitle>
        <Box
          component="img"
          src={zodiac[horoIndex].imgPath}
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
            {horoscope[horoIndex].content}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HoroscopeContainer;
