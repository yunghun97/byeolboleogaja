import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          top: '9%',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
            color: 'white',
            opacity: 0.9,
          }}
        >
          © 2022 별보러가자. All rights reserved. <br />
          대표 : 권영현 박해인 오용록 윤숙 이상윤 이아현
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
