import styled from '@emotion/styled';
import {
  Button,
  CardContent,
  Typography,
} from '@mui/material';


const FrameLine = styled.div`
  position: relative;
  top: 0px;
  left: 8.6px;
  width: 406.34px;
  height: inherit;

  border: 2px solid #FFFFFF;
  border-radius: 23.24px;
  transform: matrix(1, 0.05, -0.02, 1, 0, 0);
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0px;

  position: relative;
  width: 407px;
  height: 100%;
  left: 0px;
  top: 10.66px;

  background: #FFFFFF;
  box-shadow: 0px 9.50524px 101.672px rgba(37, 72, 153, 0.17);
  border-radius: 10px;
  margin: 1vw;
`

const CardLayout = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9.91211px 19.8242px;

  position: static;
  width: 406.4px;
  height: 221.78px;
  left: 0px;
  top: 12px;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const CardImage = styled.img`
  position: static;
  width: 366.75px;
  height: 100%;
  left: 19.82px;
  top: 9.91px;
  border-radius: 10px;
  object-fit: cover;
`

function SpaceTravelCard ({cardInfo, available}) {
    return (
        <>
          {/* <FrameLine /> */}
          <Frame>
            <CardLayout>
              <CardImage src={cardInfo.imgPath} alt='moon'/>
            </CardLayout>
            <CardContent>
              <Typography
                gutterBottom
                variant='h3'
                component='div'
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
                align='center'
                >
                {cardInfo.title}
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                지구로부터의 거리 : {cardInfo.description}
              </Typography>
            </CardContent>
            { available ?
              <Button
                variant='contained'
                sx={{ m: 1, width: '90%' }}
                >
                <Typography variant='body1'>
                  우주선에 탑승하기
                </Typography>
              </Button> : 
              <Button
                variant='contained'
                disabled
                sx={{ m: 1, width: '90%' }}
                >
                <Typography variant='body1'>
                  준비중
                </Typography>
              </Button>
            }
          </Frame>
        </>
    );
}

export default SpaceTravelCard;