import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '.';

export const useLoginMutation = (email: string, password: string) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
      return await axios.post(API_URL + 'login', { email, password });
    },
  });
};
