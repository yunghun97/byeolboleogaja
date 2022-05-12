import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Button,
  Typography
} from '@mui/material';
import bg from '@/assets/img/spaceship/img-dialogbackground.jpg'
import logo from '@/assets/img/common/logo-rmbg.png'
import title from '@/assets/img/spaceship/img-title.png'
import SpaceTravelCard from '@/components/SpaceTravelCard';
import spaceTravelInfos from '@/constants/spaceTravelInfos';

const Background1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Background2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  margin: 30px;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
`

const Logo = styled.img`
  position: absolute;
  width: 82px;
  height: 82px;
  left: 51px;
  top: 41px;
`
const TitleBg = styled.div`
  position: absolute;
  width: 358px;
  height: 82px;
  left: 167px;
  top: 41px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Space Blue */

  background: #13275A;
  border-radius: 20px;
`

const Title = styled.img`
  margin: 16px 59px;
`

const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

function SpaceTravelDialog () {
  return (
    <>
      <Background1 src={bg} alt="background" />
      <Background2>
        <Logo src={logo} alt="logo" />
        <TitleBg>
          <Title src={title} alt="title" />
        </TitleBg>
        <Button
          component={Link}
          to="/world"
          variant="contained"
          sx={{
            m: 1,
            position: 'absolute',
            top: '45px',
            left: '83.4%',
            right: '4.13%',
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            돌아가기
          </Typography>
        </Button>
        <Layout>
          <SpaceTravelCard cardInfo={spaceTravelInfos[0]} available={true}/>
          <SpaceTravelCard cardInfo={spaceTravelInfos[1]} available={false}/>
          <SpaceTravelCard cardInfo={spaceTravelInfos[2]} available={false}/>
        </Layout>
      </Background2>
    </>
  );
}

export default SpaceTravelDialog;