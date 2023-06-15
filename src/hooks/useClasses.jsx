import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import axios from 'axios';

const useClasses = () => {
  const { user, loading } = useAuthContext();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ['allClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://pencil-perfectionist-server.vercel.app/allClasses`
      );
      return res.data;
    },
  });
  return { classes, refetch };
};

export default useClasses;
