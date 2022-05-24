import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import {
  Send as SendIcon,
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
  ConstructionOutlined,
} from '@mui/icons-material';
import { sendChat, setChatSession, getChatUserList } from '@/api/chat';

const ChatWindow = () => {
  const msgBoxRef = useRef(null);
  const nickname = useStore((state) => state.nickname);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [websocket, setWebSocket] = useState(null);
  const [server, setServer] = useState(1);

  useEffect(() => {
    setWebSocket((websocket) => {
      websocket = new WebSocket('wss://k6b1021.p.ssafy.io:9998/my-chat');
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
    if (newMessage.type === 'message') {
      const newMsg = {
        content: `${newMessage.author}: ${newMessage.content}`,
        color: '#ffffff',
      };
      setMessages((msgs) => msgs.concat(newMsg));
    } else if (newMessage.type === 'connect') {
      // 해당 세션과 연결되었을 때 userId와 Session값을 다시 넘겨준다.
      console.log(newMessage, '최초연결');
      setSession(newMessage.sessionId);
    } else if (newMessage.type === 'join') {
      const newMsg = {
        content: `[알림] ${newMessage.author} 님이 입장하셨습니다.`,
        color: '#4caf50',
      };
      setMessages((msgs) => msgs.concat(newMsg));
      console.log('사람 들어옴!', newMessage);
      getUserList();
    } else if (newMessage.type === 'leave') {
      const newMsg = {
        content: `[알림] ${newMessage.author} 님이 퇴장하셨습니다.`,
        color: '#ef5350',
      };
      setMessages((msgs) => msgs.concat(newMsg));
      console.log('사람 나감 ㅜ', newMessage);
      getUserList();
    }
  };

  const setSession = (sessionId) => {
    console.log('최초연결2');
    const data = {
      sessionId: sessionId,
      author: nickname,
    };
    console.log(nickname);
    console.log(data);
    setChatSession(data) // sessionMap에 UserId와 sessionId 저장하기 위한 코드
      .then((response) => {
        console.log('세션 설정 성공', response);
      }) //
      .catch((error) => {
        console.log('세션 설정 실패', error);
      });
  };

  const getUserList = () => {
    getChatUserList()
      .then((response) => {
        console.log('UserList 가져옴 !', response);
      })
      .catch((error) => {
        console.log('UserList 가져오기 실패 ㅜㅜ', error);
      });
  };

  const onOpen = () => {};

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
      sessionId: 'all', // all이면 모든 소켓에 메시지 특정 sessionId 작성시 귓속말
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
                color: `${m.color}`,
              }}
            >{`${m.content}`}</Box>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            height: '2.5rem',
            overflowY: 'auto',
          }}
        >
          {messages.length ? (
            <Box
              sx={{
                m: '0.5rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: `${messages.slice(-1)[0].color}`,
              }}
            >
              {`${messages.slice(-1)[0].content}`}
            </Box>
          ) : (
            <></>
          )}
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
