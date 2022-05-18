import styled from '@emotion/styled';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const Title = styled(Typography)`
  font-size: 3rem;
  font-family: 'ChosunSm';
  font-weight: bold;
  &::selection {
    text-shadow: 2px 2px 4px #13275a;
  }
`

const Content = styled(Typography)`
  font-family: 'ChosunSm';
  line-height: 1.75;
  &::selection {
    background: #13275a;
    color: #fff;
  }
`

function LibraryDetailDialog ({detailInfo, open, setOpen}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} sx={{ minWidth: 275 }}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '0',
              right: '0',
            }}
            onClick={handleClose}
            >
            <CloseIcon />
          </IconButton>
          <Title>
            {detailInfo.title}
          </Title>
        </DialogTitle>
        <DialogContent>
          <Content>
            {detailInfo.content}
          </Content>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LibraryDetailDialog;