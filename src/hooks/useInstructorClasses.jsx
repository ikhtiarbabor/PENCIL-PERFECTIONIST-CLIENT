import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import useSecureUrl from './useSecureUrl';

const useInstructorClasses = () => {
  const [secureURL] = useSecureUrl();
  const { user, loading } = useAuthContext();
  const { data: instructorClass = [], refetch } = useQuery({
    queryKey: ['instructorClass', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureURL.get(
        `/classes/instructorClasses/${user?.email}`
      );
      return res.data;
    },
  });
  const instructorActiveClass = instructorClass.filter(
    (c) => c.status === 'approved'
  );
  const instructorPendingClass = instructorClass.filter(
    (c) => c.status === 'pending'
  );
  const instructorRejectClass = instructorClass.filter(
    (c) => c.status === 'reject'
  );

  return {
    instructorActiveClass,
    instructorPendingClass,
    instructorRejectClass,
    refetch,
    instructorClass
  };
};

export default useInstructorClasses;
