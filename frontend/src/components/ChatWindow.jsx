import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import {
  Send as SendIcon,
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
} from '@mui/icons-material';

const ChatWindow = () => {
  const msgBoxRef = useRef(null);
  const nickname = useStore((state) => state.nickname);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scrollToBottom = () => {
    if (msgBoxRef.current) {
      msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
    }
  };

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSendMsg = (e) => {
    //TODO: 소켓통신 send message
    setMessages(messages.concat({ nickname, msg }));
    setMsg('');
  };

  return (
    <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      {open ? (
        <Box
          ref={msgBoxRef}
          sx={{
            m: '0.5rem',
            height: '20rem',
            overflowY: 'auto',
          }}
        >
          {messages.map((m, index) => (
            <Box
              key={index}
              sx={{
                mt: '0.25rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >{`${m.nickname}: ${m.msg}`}</Box>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            height: '2.5rem',
            overflowY: 'auto',
          }}
        >
          <Box
            sx={{
              m: '0.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            {messages.length
              ? `${messages.slice(-1)[0].nickname}: ${
                  messages.slice(-1)[0].msg
                }`
              : ``}
          </Box>
        </Box>
      )}
      <Divider />
      <Paper
        sx={{
          height: '2.5rem',
          display: 'flex',
          backgroundColor: 'rgba(90, 90, 90, 0.87)',
        }}
      >
        <InputBase
          value={msg}
          onChange={handleOnChange}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSendMsg(e);
            }
          }}
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            ml: 1,
            flex: 1,
            color: '#ffffff',
          }}
        />
        <IconButton onClick={handleSendMsg}>
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