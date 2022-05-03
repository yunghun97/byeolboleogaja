import { Box } from '@mui/material';

export default function Observatory() {
  return (
    <>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000000' }}>
        <iframe
          src="https://stellarium-web.org/"
          width={'100%'}
          height={'99%'}
        ></iframe>
      </Box>
    </>
  );
}
