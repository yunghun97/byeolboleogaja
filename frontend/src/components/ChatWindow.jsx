import { useState } from 'react';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import {
  Send as SendIcon,
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
} from '@mui/icons-material';

const ChatWindow = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <Paper sx={{ opacity: '0.87', backgroundColor: '#777777' }}>
      {open ? (
        <Box sx={{ height: '15rem' }} />
      ) : (
        <Box sx={{ height: '2.5rem' }} />
      )}
      <Divider />
      <Paper
        sx={{ height: '2.5rem', display: 'flex', backgroundColor: '#555555' }}
      >
        <InputBase
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            ml: 1,
            flex: 1,
            color: '#ffffff',
          }}
        />
        <IconButton>
          <SendIcon />
        </IconButton>
        {open ? (
          <IconButton onClick={handleClose}>
            <RemoveIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleOpen}>
            <AddIcon />
          </IconButton>
        )}
      </Paper>
    </Paper>
  );
};

export default ChatWindow;
