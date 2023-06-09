import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import useSecureUrl from './useSecureUrl';

const useClasses = () => {
  const [secureURL] = useSecureUrl();
  const { user, loading } = useAuthContext();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ['allClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureURL.get(`/allClasses/${user?.email}`);
      return res.data;
    },
  });
  return { classes, refetch };
};

export default useClasses;
