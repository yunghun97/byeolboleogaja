import { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import LibraryLeaflet from '@/components/LibraryLeaflet';
import LibraryBookCard from '@/components/LibraryBookCard';
import styled from '@emotion/styled';
import bg from '@/assets/img/library/img-bookshelf.png';
import { getBooks } from '@/api/library';

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
`

const CloseLeafletButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 102;
`

function LibraryContainer () {
  const [isConsOpen, setIsConsOpen] = useState(false);  // Constellation
  const [isSCSOpen, setIsSCSOpen] = useState(false);  // Space Common Sense
  const [isPlanetOpen, setIsPlanetOpen] = useState(false);  // Planet
  const [isAstOpen, setIsAstOpen] = useState(false);  // Astronaut
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   if (isConsOpen || isSCSOpen || isPlanetOpen || isAstOpen) {
     setIsOpen(true);
   } 
  }, [isConsOpen, isSCSOpen, isPlanetOpen, isAstOpen])

  const handleGoBack = () => {
    setIsConsOpen(false);
    setIsSCSOpen(false);
    setIsPlanetOpen(false);
    setIsAstOpen(false);
    setIsOpen(false);
  }

  return (
    <>
      <Background src={bg} alt="background" />
        <Layout>
          {
            isOpen &&
            <CloseLeafletButton
              variant="contained"
              onClick={handleGoBack}>
              돌아가기
            </CloseLeafletButton>
          }
          <Grid container spacing={1}>
            <Grid item xs={6} onClick={() => {setIsConsOpen(true)}} >
              { isConsOpen && <LibraryLeaflet isOpen={isConsOpen} setIsOpen={setIsConsOpen} category="CONSTELLATION" title="별자리 이야기" />}
              <LibraryBookCard text="별자리 이야기"/>
            </Grid>
            <Grid item xs={6} onClick={() => {setIsSCSOpen(true)}} >
              { isSCSOpen && <LibraryLeaflet setIsOpen={setIsSCSOpen} category="SPACE_COMMON_SENSE" title="우주에 관한 상식" color="darkblue"/>}
              <LibraryBookCard color="darkblue" text="우주에 관한 상식"/>
            </Grid>
            <Grid item xs={6} onClick={() => {setIsPlanetOpen(true)}} >
              { isPlanetOpen && <LibraryLeaflet setIsOpen={setIsPlanetOpen} category="PLANET" title="행성 이야기" color="black"/>}
              <LibraryBookCard color="black" text="행성 이야기" />
            </Grid>
            <Grid item xs={6} onClick={() => {setIsAstOpen(true)}} >
              { isAstOpen && <LibraryLeaflet setIsOpen={setIsAstOpen}  category="ASTRONAUT" title="우주비행사 이야기" color="cornflowerblue"/>}
              <LibraryBookCard color="cornflowerblue" text="우주비행사 이야기"/>
            </Grid>
          </Grid>
        </Layout>
    </>
  );
}

export default LibraryContainer;
