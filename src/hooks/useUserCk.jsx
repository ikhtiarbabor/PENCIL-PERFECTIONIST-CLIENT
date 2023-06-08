import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import useSecureUrl from './useSecureUrl';

const useUserCk = () => {
  const { user } = useAuthContext();
  const [axiosSecure] = useSecureUrl();
  // use axios secure with react query
  const { data: userRole, isLoading: isUserLoading } = useQuery({
    queryKey: ['userCk', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      return res.data;
    },
  });
  return [userRole, isUserLoading];
};

export default useUserCk;
