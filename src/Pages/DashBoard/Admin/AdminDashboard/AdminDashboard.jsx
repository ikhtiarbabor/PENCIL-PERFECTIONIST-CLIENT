import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../../../hooks/useAuthContext';
import useSecureUrl from '../../../../hooks/useSecureUrl';
import { RiAdminFill } from 'react-icons/ri';

const AdminDashboard = () => {
  const { user, loading } = useAuthContext();
  const [secureURL] = useSecureUrl();
  const { data: users = [] } = useQuery({
    queryKey: ['users', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureURL('/users');

      return res?.data;
    },
  });
  console.log(users);
  const instructors = users.filter((user) => user.role === 'instructor');
  const students = users.filter((user) => user.role === 'student');
  return (
    <section className='allContainer'>
      <h1>
        My Dashboard <RiAdminFill className='inline-block'></RiAdminFill>
      </h1>
      <div className='md:grid grid-cols-4 gap-5'>
        <div className='bg-gradient-to-r from-teal-200 to-lime-200 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2 className='text-2xl bold'>Total User</h2>
          <p className='text-4xl py-3 bold'>
            {users?.length <= 9 ? '0' + users.length : users.length}
          </p>
        </div>
        <div className='bg-gradient-to-r from-red-200 to-red-600 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total Instructor</h2>
          <p>
            {instructors?.length <= 9
              ? '0' + instructors.length
              : instructors.length}
          </p>
        </div>
        <div className='bg-gradient-to-r from-green-200 via-green-400 to-green-500 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total Students</h2>
          {students?.length <= 9 ? '0' + students.length : students.length}
        </div>
        <div className='bg-gradient-to-r from-green-300 to-purple-400 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total Course</h2>
          <p>{users?.length}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
