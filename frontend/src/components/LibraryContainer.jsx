import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
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

function LibraryContainer () {
  const [isConsOpen, setIsConsOpen] = useState(false);  // Constellation
  const [isSCSOpen, setIsSCSOpen] = useState(false);  // Space Common Sense
  const [isPlanetOpen, setIsPlanetOpen] = useState(false);  // Planet
  const [isAstOpen, setIsAstOpen] = useState(false);  // Astronaut

  return (
    <>
      <Background src={bg} alt="background" />
        <Layout>
          <Grid container spacing={1}>
            <Grid item xs={6} onClick={() => {setIsConsOpen(true)}} >
              { isConsOpen && <LibraryLeaflet setIsOpen={setIsConsOpen} category="CONSTELLATION"/>}
              <LibraryBookCard text="별자리 이야기"/>
            </Grid>
            <Grid item xs={6} onClick={() => {setIsSCSOpen(true)}} >
              { isSCSOpen && <LibraryLeaflet setIsOpen={setIsSCSOpen} />}
              <LibraryBookCard color="darkblue" text="우주에 관한 상식" category="SPACE_COMMON_SENSE"/>
            </Grid>
            <Grid item xs={6} onClick={() => {setIsPlanetOpen(true)}} >
              { isPlanetOpen && <LibraryLeaflet setIsOpen={setIsPlanetOpen} category="PLANET"/>}
              <LibraryBookCard color="black" text="행성 이야기" />
            </Grid>
            <Grid item xs={6} onClick={() => {setIsAstOpen(true)}} >
              { isAstOpen && <LibraryLeaflet setIsOpen={setIsAstOpen} />}
              <LibraryBookCard color="cornflowerblue" text="우주비행사 이야기" category="ASTRONAUT"/>
            </Grid>
          </Grid>
        </Layout>
    </>
  );
}

export default LibraryContainer;
