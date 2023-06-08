import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../../../hooks/useAuthContext';
import useSecureUrl from '../../../../hooks/useSecureUrl';
import DashboardTable from '../../DashboardTable/DashboardTable';

const AllUser = () => {
  const tableHead = ['Image', 'Name', 'Action', 'Details'];
  const { user, loading } = useAuthContext();
  const [secureURL] = useSecureUrl();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureURL('/users');

      return res?.data;
    },
  });
  return (
    <section className='allContainer'>
      <h2>Total User {users?.length}</h2>
      <DashboardTable
        tableHead={tableHead}
        tableRow={users}
        refetch={refetch}
      ></DashboardTable>
    </section>
  );
};

export default AllUser;
