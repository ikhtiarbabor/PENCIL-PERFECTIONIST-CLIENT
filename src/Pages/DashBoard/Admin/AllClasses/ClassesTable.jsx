import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import Modal from '../Modal/Modal';
import useSecureUrl from '../../../../hooks/useSecureUrl';
import { toast } from 'react-toastify';
const ClassesTable = ({ tableHead, tableRow, use, refetch }) => {
  const [secureURL] = useSecureUrl();
  const handleStatus = async (id, status = 'reject') => {
    if (status === 'approved') {
      await secureURL
        .patch(`/allUser/updateStatus/${id}`, { status: 'approved' })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount === 1) {
            toast(`✔️You Approved This Class`);
            refetch();
          }
        });
    } else if (status === 'reject') {
      console.log(id);
      await secureURL
        .patch(`/allUser/updateStatus/${id}`, { status: 'reject' })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount === 1) {
            toast(`❌ You Reject This Class`);
            refetch();
          }
        });
    }
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
                      {data.instructor}
                    </span>
                    <br />
                    <span className='badge badge-ghost badge-sm'>
                      {data.instructor_mail}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                ${data.price}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  <FaShoppingCart className='text-green-500'></FaShoppingCart>
                  {data.seat}
                </span>
                <br />
                <span className='badge badge-ghost badge-sm'>
                  <MdAirlineSeatReclineExtra className='text-red-500' />
                  {data.totalEnrolled}
                </span>
              </td>
              <td>
                {use === 'pending' ? (
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
                  <button className='btn rounded-full border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white'>
                    <AiFillDelete></AiFillDelete>
                  </button>
                )}
              </td>
              <th>
                <Modal id={data._id} data={data}></Modal>
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
