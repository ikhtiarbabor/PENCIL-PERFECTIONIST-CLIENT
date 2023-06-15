import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import useClasses from './useClasses';
import useTokenConfig from './useTokenConfig';
import axios from 'axios';

const useEnrolled = () => {
  const { user, loading } = useAuthContext();
  const [config] = useTokenConfig();
  const { classes } = useClasses();
  const { data: enrolled = [], refetch } = useQuery({
    queryKey: ['enrolled', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://pencil-perfectionist-server.vercel.app/classes/enrolled/${user?.email}`,
        config
      );
      return res.data;
    },
  });
  const enrolledClasses = enrolled.map((enroll) =>
    classes.find((c) => c._id === enroll.classId)
  );
  return { enrolled, refetch, enrolledClasses };
};

export default useEnrolled;
