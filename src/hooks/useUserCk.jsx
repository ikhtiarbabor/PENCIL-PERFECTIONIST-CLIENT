import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import axios from 'axios';

const useUserCk = () => {
  const { user, loading } = useAuthContext();

  const {
    data: userData,
    isLoading: isUserLoading,
    refetch,
  } = useQuery({
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
  const userRole = userData?.role;
  const _id = userData?._id;
  return [userRole, isUserLoading, _id, refetch];
};

export default useUserCk;
