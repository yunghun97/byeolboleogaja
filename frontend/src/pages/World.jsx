import { useState, useEffect } from 'react';
import { useStore } from '@/store';
import WorldGuideDialog from '@/components/WorldGuideDialog';
import Menu from '@/components/Menu';
import WorldContainer from '@/components/WorldContainer';
import { worldGuideInfos } from '@/constants';
import { Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
export default function World() {
  const [guideOpen, setGuideOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackOpenCheck, setSnackOpenCheck] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const isSkip = useStore((state) => state.isSkip);
  const nickname = useStore((state) => state.nickname);
  useEffect(() => {
    if (isSkip == 0) {
      setTimeout(function () {
        setOpen(true);

        setSnackOpen(true);
      }, 3000);
    }
    if (isSkip === 1) {
      setSnackOpenCheck(true);
      setOpen(false);
    }
  }, []);
  useEffect(() => {
    if (snackOpenCheck == true) {
      setSnackOpen(false);
    }
  });
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
    <main>
      <WorldContainer />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`${nickname}` + ' 어서와~  우리 별보러 함께 모험을 떠나자!'}
        action={action}
      />
      <WorldGuideDialog
        guideInfos={worldGuideInfos}
        open={open}
        setOpen={setOpen}
      />
      <Menu
        isGuideDialog={true}
        setGuideOpen={setGuideOpen}
        isWorld={false}
        placeBGM={'world'}
      />
    </main>
  );
}
