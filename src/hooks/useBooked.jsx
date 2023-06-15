import { useQuery } from '@tanstack/react-query';
import useAuthContext from './useAuthContext';
import axios from 'axios';
import useTokenConfig from './useTokenConfig';
import useClasses from './useClasses';

const useBooked = () => {
  const { user, loading } = useAuthContext();
  const [config] = useTokenConfig();
  const { classes } = useClasses();
  const { data: booking = [], refetch } = useQuery({
    queryKey: ['booking', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/classes/booked/${user?.email}`,
        config
      );
      return res.data;
    },
  });
  const bookingClass = booking.map((booking) =>
  classes.find((c) => c._id === booking.classId)
);
  return { booking, refetch,bookingClass };
};

export default useBooked;
