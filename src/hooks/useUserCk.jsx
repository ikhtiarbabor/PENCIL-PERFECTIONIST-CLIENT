import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import axios from 'axios';

const useUserCk = () => {
  const { user, loading } = useAuthContext();

  const { data: userRole, isLoading: isUserLoading } = useQuery({
    queryKey: ['userCk', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(
        `http://localhost:5000/users/user/${user?.email}`,
        { headers: { authorization: `bearer ${token}` } }
      );
      return res.data;
    },
  });
  return [userRole, isUserLoading];
};

export default useUserCk;
