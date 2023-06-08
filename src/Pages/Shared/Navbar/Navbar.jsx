import { Link, NavLink } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const navBar = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Instructors</NavLink>
      <NavLink>All Classes</NavLink>
    </>
  );
  return (
    <header className='allContainer bg-slate-700'>
      <div className='navbar bg-transparent text-white m'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navBar}
            </div>
          </div>
          <a className=''>
            <img
              src='https://i.ibb.co/P9XMgDd/Logo.png'
              className='w-[140px]'
              alt=''
            />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <div className='menu menu-horizontal px-1'>{navBar}</div>
        </div>
        <div className='navbar-end'>
          {user ? (
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full border-red-600'>
                  <img src={user?.photoURL || <FaUserAlt />} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-slate-400 rounded-box w-52 z-50'
              >
                <li>
                  <Link className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/studentDashboard'
                    className='justify-between'
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to='/login' className=''>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
