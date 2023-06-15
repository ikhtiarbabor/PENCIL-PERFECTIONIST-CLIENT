import { FaAmazonPay } from 'react-icons/fa';
import useBooked from '../../../../hooks/useBooked';
import ClassesTable from '../../Admin/AllClasses/ClassesTable';
import { Link } from 'react-router-dom';

const StudentBookedClasses = () => {
  const { booking, refetch, bookingClass } = useBooked();
  const tableHead = ['Image', 'Name', 'Action', 'Details'];

  const totalPrice = bookingClass.reduce((sum, item) => item?.price + sum, 0);

  return (
    <section className='allContainer'>
      <h2>Total Booked {bookingClass?.length}</h2>
      <div className='flex w-full justify-end '>
        <h2 className='text-4xl'>${totalPrice}</h2>

        {totalPrice > 0 ? (
          <Link to='/dashboard/payment' className='mr-5'>
            <button className='btn rounded-full border-green-700 text-green-700 bg-white text-base hover:bg-green-700 hover:text-white'>
              <FaAmazonPay className='text-4xl' />
            </button>{' '}
          </Link>
        ) : (
          <button
            disabled
            className='btn rounded-full border-green-700 text-green-700 bg-white text-base hover:bg-green-700 hover:text-white'
          >
            <FaAmazonPay className='text-4xl' />
          </button>
        )}
      </div>
      <ClassesTable
        tableHead={tableHead}
        tableRow={bookingClass}
        use='booking'
        refetch={refetch}
      />
    </section>
  );
};

export default StudentBookedClasses;
