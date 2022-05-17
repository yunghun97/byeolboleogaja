import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import GuideDialog from '@/components/GuideDialog';
import { guideInfos } from '@/constants';

const StellarContainer = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000000' }}>
      <iframe
        src="https://stellarium-web.org/"
        width={'100%'}
        height={'99%'}
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
      <Button
        component={Link}
        to="/world"
        variant="contained"
        sx={{
          width: 'min(192px, 30%)',
          position: 'absolute',
          bottom: '30vh',
          right: '8px',
          zIndex: 1000,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          월드로 돌아가기
        </Typography>
      </Button>
      <GuideDialog guideInfos={guideInfos} open={open} setOpen={setOpen} />
    </Box>
  );
};

export default StellarContainer;
