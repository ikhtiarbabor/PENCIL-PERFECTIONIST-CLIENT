import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../Pages/DashBoard/dashboardCss/DashBoard.css';
import useUserCk from '../../hooks/useUserCk';

import useAuthContext from '../../hooks/useAuthContext';

const Dashboard = () => {
  const { logOut, user } = useAuthContext();
  const navigate = useNavigate();
  const [userRole] = useUserCk();
  const handleLogout = () => {
    logOut().then(() => {});
    navigate('/');
  };
  const btnClass =
    'py-3 my-2 hover:bg-red-700 px-3 rounded btn border-0 flex justify-start hover:text-white w-full';
  const students = (
    <>
      <NavLink to='/dashboard/studentDashboard' className={btnClass}>
        Dashboard
      </NavLink>
      <NavLink to='/dashboard/studentBookedClasses' className={btnClass}>
        Booked Classes
      </NavLink>
      <NavLink to='/dashboard/studentEnrollClasses' className={btnClass}>
        Enrolled Classes
      </NavLink>
    </>
  );
  const instructor = (
    <>
      {' '}
      <NavLink to='/dashboard/instructorDashboard' className={btnClass}>
        Instructor Dashboard
      </NavLink>
      <NavLink to='/dashboard/instructorClasses' className={btnClass}>
        My Class
      </NavLink>
      <NavLink to='/dashboard/instructorClasses/appliedClasses' className={btnClass}>
        Applied Classes
      </NavLink>
      <NavLink to='/dashboard/instructorAddClasses' className={btnClass}>
        Add Classes
      </NavLink>
    </>
  );
  const admin = (
    <>
      <NavLink to='/dashboard/adminDashBoard' className={btnClass}>
        Admin Dashboard
      </NavLink>
      <NavLink to='/dashboard/allUser' className={btnClass}>
        All User
      </NavLink>
      <NavLink to='/dashboard/allClasses' className={btnClass}>
        All Classes
      </NavLink>
      <NavLink to='/dashboard/pendingClasses' className={btnClass}>
        Pending Classes
      </NavLink>
      <NavLink to='/dashboard/rejectClasses' className={btnClass}>
        Reject Classes
      </NavLink>
    </>
  );
  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <Outlet />
      </div>
      <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
        <FaBars />
      </label>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <div className='menu p-4 w-80 h-full bg-black text-white block'>
          <div className='flex justify-center flex-col items-center'>
            <div className='avatar online'>
              <div className='w-24 rounded-full'>
                <img src={user?.photoURL} />
              </div>
            </div>
            <p className='uppercase py-3'>{userRole}</p>
            {userRole === 'student' && <button>Request Instructor</button>}
          </div>
          {userRole === 'student'
            ? students
            : userRole === 'instructor'
            ? instructor
            : admin}

          <div className='border-2 border-white my-8'></div>
          <NavLink to='/' className={btnClass}>
            Home
          </NavLink>
          <button onClick={handleLogout} className={btnClass}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
