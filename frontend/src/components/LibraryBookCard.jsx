import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const PageFace = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 40vh;
  height: 40vh;
  background: #13275a;
  margin: auto;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    border: 1px solid white;
  }
  &:hover{
    transform: translateY(-5px) scale(1.005) translateZ(0);
    background-color: lighten(black, 5%);
    cursor: pointer;
  }
`

function LibraryBookCard ({color, text}) {
  return (
    <PageFace style={{backgroundColor: color}}>
      <Typography
        variant="h2"
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'white',
        }}
      >{text}</Typography>
    </PageFace>
  );
}

export default LibraryBookCard;