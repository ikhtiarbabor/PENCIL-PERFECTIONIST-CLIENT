import { GiTeacher } from 'react-icons/gi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useSecureUrl from '../../../hooks/useSecureUrl';
const DashboardTable = ({ tableHead, tableRow, refetch }) => {
  const [secureURL] = useSecureUrl();
  const handleAdmin = async (id, role) => {
    const config = {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    };
    if (role === 'admin') {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to make this user As Admin!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#64748B',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await secureURL
            .patch(
              `/users/adminUpdate/${id}`,
              {
                role: role,
              },
              config
            )
            .then((res) => {
              console.log(res.data);
              refetch();
            });
          Swal.fire('Admin!', 'You make this user as Admin', 'success');
        }
      });
    } else {
      await secureURL
        .patch(`/users/adminUpdate/${id}`, { role: role }, config)
        .then((res) => {
          if (res.data.modifiedCount === 1) {
            toast(`You Make this User as ${role}`);
          }
          refetch();
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
                      <img src={data?.photoURL} alt={data.displayName} />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{data.displayName}</div>
                  </div>
                </div>
              </td>
              <td>
                {data.displayName}
                <br />
                <span className='badge badge-ghost badge-sm'>{data.role}</span>
                {data.request && (
                  <>
                    <br />
                    <span className='badge badge-ghost badge-sm bg-orange-600 text-white capitalize'>
                      Request {data.request}
                    </span>
                  </>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleAdmin(data?._id, 'instructor')}
                  disabled={data?.role === 'instructor' ? true : false}
                  className={`btn rounded-full ${
                    data?.role !== 'instructor'
                      ? ' border-slate-800 text-slate-800 bg-white text-base hover:bg-slate-800 hover:text-white'
                      : 'border-red-500 bg-red-500 text-white'
                  }`}
                >
                  <GiTeacher></GiTeacher>
                </button>
                <button
                  onClick={() => handleAdmin(data?._id, 'admin')}
                  disabled={data?.role === 'admin' ? true : false}
                  className={`btn rounded-full ${
                    data?.role !== 'admin'
                      ? ' border-slate-800 text-slate-800 bg-white text-base hover:bg-slate-800 hover:text-white'
                      : 'border-red-500 bg-red-500 text-white'
                  }`}
                >
                  <MdAdminPanelSettings></MdAdminPanelSettings>
                </button>
                <button
                  onClick={() => handleAdmin(data?._id, 'student')}
                  disabled={data?.role === 'student' ? true : false}
                  className={`btn rounded-full ${
                    data?.role !== 'student'
                      ? ' border-slate-800 text-slate-800 bg-white text-base hover:bg-slate-800 hover:text-white'
                      : 'border-red-500 bg-red-500 text-white'
                  }`}
                >
                  <BiUser></BiUser>
                </button>
              </td>
              <th>
                <button className='btn btn-ghost btn-xs'>details</button>
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

export default DashboardTable;
