import { chatApi } from '.';

const sendChat = async (data) => {
  return await chatApi.post('/kafka/publish', JSON.stringify(data));
};

export { sendChat };
