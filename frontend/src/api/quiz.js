import { api } from '.';

const getQuiz = async () => {
  return await api.get(`/quiz`);
};

export { getQuiz };
