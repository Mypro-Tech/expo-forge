import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '.';

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['get-users'],
    queryFn: async () => {
      return await axios.get(API_URL + 'users');
    },
  });
};
