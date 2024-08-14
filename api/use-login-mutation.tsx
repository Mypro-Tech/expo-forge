import { MutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '.';

type Props = Omit<
  MutationOptions<
    AxiosResponse<{ token: string }>,
    AxiosError<any>,
    { email: string; password: string }
  >,
  'mutationKey mutationFn'
>;
export const useLoginMutation = (options: Props = {}) => {
  return useMutation({
    ...options,
    mutationKey: ['login'],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }): Promise<AxiosResponse<{ token: string }>> => {
      return await axios.post(API_URL + 'login', { email, password });
    },
  });
};
