import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import {
  Send as SendIcon,
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
} from '@mui/icons-material';
import { sendChat } from '@/api/chat';

const ChatWindow = () => {
  const msgBoxRef = useRef(null);
  const nickname = useStore((state) => state.nickname);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [websocket, setWebSocket] = useState(null);
  const [server, setServer] = useState(1);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);
  useEffect(()=>{    
    console.log("찍힘");
    setWebSocket(websocket =>{
      websocket = new WebSocket("wss://k6b1021.p.ssafy.io:9998/my-chat");
      websocket.onmessage = onMessage;
      websocket.onopen = onOpen;
      return websocket;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, [websocket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  const onMessage = (message) => {
    const newMessage = JSON.parse(message.data);
    setMessages((msgs) => msgs.concat(newMessage));
  };

  const onOpen = () => {
    console.log('웹소켓 연결!');
  };

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

  const handleSendMsg = () => {
    if (msg === '') return;
    const data = {
      server: server,
      author: nickname,
      content: msg,
    };
    sendChat(data);
    setMsg('');
    // websocket.send(JSON.stringify(json));
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
            >{`${m.author}: ${m.content}`}</Box>
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
              ? `${messages.slice(-1)[0].author}: ${
                  messages.slice(-1)[0].content
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
