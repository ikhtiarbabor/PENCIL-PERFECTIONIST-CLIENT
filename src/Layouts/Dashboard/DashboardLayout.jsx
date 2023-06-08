import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import '../../Pages/DashBoard/dashboardCss/DashBoard.css';
import useUserCk from '../../hooks/useUserCk';

const Dashboard = () => {
  const [userRole] = useUserCk();
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
      <NavLink to='/dashboard/studentDashboard' className={btnClass}>
        Instructor Dashboard
      </NavLink>
      <NavLink to='/dashboard/studentBookedClasses' className={btnClass}>
        Booked Classes
      </NavLink>
      <NavLink to='/dashboard/studentEnrollClasses' className={btnClass}>
        Enrolled Classes
      </NavLink>
    </>
  );
  const admin = (
    <>
      <NavLink to='/dashboard/adminDashBoard' className={btnClass}>
        Admin Dashboard
      </NavLink>
      <NavLink to='/dashboard/studentBookedClasses' className={btnClass}>
        Booked Classes
      </NavLink>
      <NavLink to='/dashboard/studentEnrollClasses' className={btnClass}>
        Enrolled Classes
      </NavLink>
    </>
  );
  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content allContainer'>
        <Outlet />
      </div>
      <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
        <FaBars />
      </label>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <div className='menu p-4 w-80 h-full bg-black text-white block'>
          {userRole === 'student'
            ? students
            : userRole === 'instructor'
            ? instructor
            : admin}

          <div className='border-2 border-white my-8'></div>
          <NavLink to='/' className={btnClass}>
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
