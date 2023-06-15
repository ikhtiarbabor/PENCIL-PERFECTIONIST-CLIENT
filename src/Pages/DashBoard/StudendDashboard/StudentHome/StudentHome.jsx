import { RiAdminFill } from 'react-icons/ri';
import useBooked from '../../../../hooks/useBooked';
import useEnrolled from '../../../../hooks/useEnrolled';

const StudentHome = () => {
  const { enrolled } = useEnrolled([]);
  console.log(enrolled);
  const { booking } = useBooked();
  return (
    <section className='allContainer'>
      <h1>
        My Dashboard <RiAdminFill className='inline-block'></RiAdminFill>
      </h1>
      <div className='md:grid grid-cols-4 gap-5'>
        <div className='bg-gradient-to-r from-green-200 via-green-400 to-green-500 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total Enrolled</h2>
          {enrolled?.length <= 9 ? '0' + enrolled.length : enrolled.length}
        </div>
        <div className='bg-gradient-to-r from-green-300 to-purple-400 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total booking</h2>

          {booking?.length <= 9 ? '0' + booking.length : booking.length}
        </div>
      </div>
    </section>
  );
};

export default StudentHome;
