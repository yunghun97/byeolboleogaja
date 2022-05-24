import { chatApi } from '.';

const sendChat = async (data) => {
  return await chatApi.post('/kafka/publish', JSON.stringify(data));
};

const setChatSession = (data) => {
  return chatApi.post('/session/set', data);
};

const getChatUserList = () => {
  return chatApi.get('/user/list');
};

export { sendChat, setChatSession, getChatUserList };
