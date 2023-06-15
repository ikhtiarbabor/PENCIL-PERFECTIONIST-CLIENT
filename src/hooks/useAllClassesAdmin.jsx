import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import axios from 'axios';
import useTokenConfig from './useTokenConfig';

const useAllClassesAdmin = () => {
  const { user, loading } = useAuthContext();
  const [config] = useTokenConfig();
  const { data: classesAdmin = [], refetch } = useQuery({
    queryKey: ['allClassesAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://pencil-perfectionist-server.vercel.app/allClasses/admin`,
        config
      );
      return res.data;
    },
  });
  return { classesAdmin, refetch };
};

export default useAllClassesAdmin;
