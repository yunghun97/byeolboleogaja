import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import {
  Send as SendIcon,
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
  Person as PersonIcon,
  Circle as CircleIcon,
} from '@mui/icons-material';
import { sendChat, setChatSession, getChatUserList } from '@/api/chat';
import PrivateMsgDialog from './PrivateMsgDialog';

const ChatWindow = ({ serverName }) => {
  const msgBoxRef = useRef(null);
  const nickname = useStore((state) => state.nickname);
  const [userList, setUserList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');
  const [privateTo, setPrivateTo] = useState({});
  const [mySessionId, setMySessionId] = useState('');
  const [open, setOpen] = useState(false);
  const [userListOpen, setUserListOpen] = useState(false);
  const [privateMsgOpen, setPrivateMsgOpen] = useState(false);
  const [websocket, setWebSocket] = useState(null);

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
      // console.log(newMessage);
      const newMsg = {
        content: `${newMessage.author}: ${newMessage.content}`,
        color: newMessage.sessionId === 'all' ? '#ffffff' : '#ff9800',
      };
      setMessages((msgs) => msgs.concat(newMsg));
    } else if (newMessage.type === 'connect') {
      // 해당 세션과 연결되었을 때 userId와 Session값을 다시 넘겨준다.
      // console.log(newMessage, '최초연결');
      setSession(newMessage.sessionId);
      setMySessionId(newMessage.sessionId);
    } else if (newMessage.type === 'join') {
      // console.log('사람 들어옴!', newMessage);
      const newMsg = {
        content: `[알림] ${newMessage.author} 님이 입장하셨습니다.`,
        color: '#4caf50',
      };
      setMessages((msgs) => msgs.concat(newMsg));
      getUserList();
    } else if (newMessage.type === 'leave') {
      // console.log('사람 나감 ㅜ', newMessage);
      const newMsg = {
        content: `[알림] ${newMessage.author} 님이 퇴장하셨습니다.`,
        color: '#ef5350',
      };
      setMessages((msgs) => msgs.concat(newMsg));
      getUserList();
    }
  };

  const setSession = (sessionId) => {
    // console.log('최초연결2');
    const data = {
      sessionId: sessionId,
      author: nickname,
    };
    // console.log(nickname);
    // console.log(data);
    setChatSession(data) // sessionMap에 UserId와 sessionId 저장하기 위한 코드
      .then((response) => {
        // console.log('세션 설정 성공', response);
      }) //
      .catch((error) => {
        console.error('세션 설정 실패', error);
      });
  };

  const getUserList = () => {
    getChatUserList()
      .then((response) => {
        // console.log('UserList 가져옴 !', response);
        setUserList(response.data);
      })
      .catch((error) => {
        console.error('UserList 가져오기 실패 ㅜㅜ', error);
      });
  };

  const onOpen = () => {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserListOpen = () => {
    setUserListOpen(!userListOpen);
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

  const handleSendPrivateMsg = (privateMsg) => {
    const data = {
      sessionId: privateTo.sessionId,
      author: `(귓속말) ${nickname}`,
      content: privateMsg,
    };
    sendChat(data);

    const newMsg = {
      content: `${data.author}: ${data.content}`,
      color: '#ff9800',
    };
    setMessages((msgs) => msgs.concat(newMsg));
  };

  const handlePrivateMsg = (user) => {
    setPrivateTo(user);
    setPrivateMsgOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          width: 'min(280px, 75%)',
          position: 'fixed',
          top: '1vh',
          left: '1vw',
          zIndex: 998,
        }}
      >
        <Paper
          sx={{
            height: '2.5rem',
            display: 'flex',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <IconButton sx={{ color: '#ffffff' }} onClick={handleUserListOpen}>
            <PersonIcon />
          </IconButton>
          <Typography
            sx={{
              m: '0.5rem',
              fontSize: '1rem',
              color: '#ffffff',
            }}
          >
            {` 현재 접속자 수 : ${userList.length}`}
          </Typography>
        </Paper>
        {userListOpen ? (
          <>
            <Divider />
            <Paper
              sx={{
                height: '10rem',
                overflowY: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              {userList.map((user, index) => (
                <Box key={index} sx={{ display: 'flex' }}>
                  {user.sessionId === mySessionId ? (
                    <CircleIcon
                      sx={{
                        m: '0.5rem',
                        fontSize: '1rem',
                        color: 'blue',
                      }}
                    />
                  ) : (
                    <CircleIcon
                      sx={{
                        m: '0.5rem',
                        fontSize: '1rem',
                        color: 'green',
                        cursor: 'pointer',
                      }}
                      onClick={() => handlePrivateMsg(user)}
                    />
                  )}
                  <Typography
                    sx={{
                      m: '0.25rem',
                      fontSize: '1rem',
                      color: '#ffffff',
                    }}
                  >
                    {`${user.author} ${
                      user.sessionId === mySessionId ? '(Me)' : ''
                    }`}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </>
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          width: 'min(730px, 75%)',
          position: 'fixed',
          left: '1vw',
          bottom: '1vh',
          zIndex: 999,
        }}
      >
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
      </Box>
      <PrivateMsgDialog
        open={privateMsgOpen}
        setOpen={setPrivateMsgOpen}
        author={privateTo.author}
        handleSendPrivateMsg={handleSendPrivateMsg}
      />
    </>
  );
};

export default ChatWindow;
