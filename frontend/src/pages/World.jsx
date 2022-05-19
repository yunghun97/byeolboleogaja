import { useState, useEffect } from 'react';
import { useStore } from '@/store';
import WorldGuideDialog from '@/components/WorldGuideDialog';
import Menu from '@/components/Menu';
import WorldContainer from '@/components/WorldContainer';
import { worldGuideInfos } from '@/constants';
import { Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export default function World() {
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const isSkip = useStore((state) => state.isSkip);
  const nickname = useStore((state) => state.nickname);

  useEffect(() => {
    if (isSkip === 0) {
      setOpen(true);
      setSnackOpen(true);
    }
  }, []);

  const handleClose = () => {
    setSnackOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <WorldContainer />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`${nickname} 님! 별보러가자와 함께 즐거운 우주 여행되세요!`}
        action={action}
      />
      <WorldGuideDialog
        guideInfos={worldGuideInfos}
        open={open}
        setOpen={setOpen}
      />
      <Menu
        isGuideDialog={true}
        setGuideOpen={setOpen}
        isWorld={false}
        placeBGM={'world'}
      />
    </>
  );
}
