import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai';
import { FaAmazonPay, FaLink, FaShoppingCart } from 'react-icons/fa';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import Modal from '../Modal/Modal';
import useSecureUrl from '../../../../hooks/useSecureUrl';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useBooked from '../../../../hooks/useBooked';
import { Link } from 'react-router-dom';
const ClassesTable = ({ tableHead, tableRow, use, refetch }) => {
  const [secureURL] = useSecureUrl();
  const { booking } = useBooked();
  const handleClass = (link) => {
    window.open(link, '_blank');
  };
  const handleStatus = async (id, status = 'reject') => {
    if (status === 'approved') {
      await secureURL
        .patch(`/allClasses/updateStatus/${id}`, { status: 'approved' })
        .then((res) => {
          console.log(res.data);
          if (res.data?.modifiedCount === 1) {
            toast(`✔️You Approved This Class`);
            refetch();
          }
        });
    } else if (status === 'reject') {
      await secureURL
        .patch(`/allClasses/updateStatus/${id}`, { status: 'reject' })
        .then((res) => {
          console.log(res.data);
          if (res.data?.modifiedCount === 1) {
            toast(`❌ You Reject This Class`);
            refetch();
          }
        });
    } else if (status === 'delete') {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert class!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#64748b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await secureURL.delete(`/allClasses/delete/${id}`).then((res) => {
            console.log(res.data);
            if (res.data?.deletedCount === 1) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              refetch();
            }
          });
        }
      });
    }
  };
  const handleRemoveBookmark = async (id) => {
    const bookingId = booking.find((b) => b.classId === id);
    await secureURL
      .delete(`/classes/deleteBooked/${bookingId?._id}`)
      .then((res) => {
        if (res.data?.deletedCount === 1) {
          toast(`❌ You delete this class from bookmark`);
          refetch();
        }
      });
  };
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            {tableHead.map((tableTd, i) => (
              <th key={'th' + i}>{tableTd}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableRow.map((data) => (
            <tr key={data?._id}>
              <td>
                <div className='flex items-center space-x-2'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img src={data?.imageURL} alt={data?.className} />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{data?.className}</div>
                    <span className='badge badge-ghost badge-sm'>
                      {data?.instructor}
                    </span>
                    <br />
                    <span className='badge badge-ghost badge-sm'>
                      {data?.instructor_mail}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                ${data?.price}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  <MdAirlineSeatReclineExtra className='text-red-500' />
                  {data?.seat}
                </span>
                <br />
                <span className='badge badge-ghost badge-sm'>
                  <FaShoppingCart className='text-green-500'></FaShoppingCart>
                  {data?.totalEnrolled}
                </span>
              </td>
              <td>
                {use === 'enrolled' ? (
                  <button
                    onClick={() =>
                      handleClass('https://meet.google.com/wxo-jnoo-qmw')
                    }
                    className='btn rounded-full border-blue-700 text-blue-700 bg-white text-base hover:bg-blue-700 hover:text-white'
                  >
                    <FaLink className='text-4xl' />
                  </button>
                ) : use === 'booking' ? (
                  <Link to='/dashboard/payment'>
                    <button className='btn rounded-full border-green-700 text-green-700 bg-white text-base hover:bg-green-700 hover:text-white'>
                      <FaAmazonPay className='text-4xl' />
                    </button>
                  </Link>
                ) : use === 'appliedClasses' ? (
                  <p
                    className={`capitalize ${
                      data?.status === 'pending'
                        ? 'text-orange-400'
                        : 'text-red-700 font-bold'
                    }`}
                  >
                    {data?.status}
                  </p>
                ) : use === 'allClass' ? (
                  <button
                    onClick={() => handleStatus(data?._id, 'delete')}
                    className='btn rounded-full border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white'
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                ) : use === 'pending' ? (
                  <>
                    {' '}
                    <button
                      onClick={() => handleStatus(data?._id, 'approved')}
                      className='btn rounded-full border-green-700 text-green-700 bg-white text-base hover:bg-green-700 hover:text-white'
                    >
                      <AiOutlineCheck></AiOutlineCheck>
                    </button>{' '}
                    <button
                      onClick={() => handleStatus(data?._id, 'reject')}
                      className='btn rounded-full border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white'
                    >
                      <RxCross1></RxCross1>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleStatus(data?._id, 'approved')}
                      className='btn rounded-full border-green-700 text-green-700 bg-white text-base hover:bg-green-700 hover:text-white mx-1'
                    >
                      <AiOutlineCheck></AiOutlineCheck>
                    </button>
                    <button
                      onClick={() => handleStatus(data?._id, 'delete')}
                      className='btn rounded-full border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white'
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </>
                )}
              </td>
              <th>
                {use === 'booking' ? (
                  <>
                    <button
                      onClick={() => handleRemoveBookmark(data?._id)}
                      className='btn rounded-full border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white mr-1'
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                    <Modal id={data?._id} data={data} use='booking'></Modal>
                  </>
                ) : (
                  <Modal id={data?._id} data={data}></Modal>
                )}
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            {tableHead.map((tableTd, i) => (
              <th key={'tf' + i}>{tableTd}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ClassesTable;
