import { Link, NavLink } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import { FaMoon, FaUserAlt } from 'react-icons/fa';
import useUserCk from '../../../hooks/useUserCk';
import { useState } from 'react';

const Navbar = () => {
  const [userRole] = useUserCk();
  const [theme, setTheme] = useState(false);
  const handleDarkTheme = () => {
    const body = document.body;
    setTheme(!theme);
    body.classList.toggle('darkTheme');
    const card = document.getElementById('darkBg');
    card.classList.add('text-white border-2 border-white');
  };
  const dashboard =
    userRole === 'admin'
      ? '/dashboard/adminDashBoard'
      : userRole === 'student'
      ? '/dashboard/studentDashboard'
      : '/dashboard/instructorDashboard';
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
      <NavLink
        className='py-3 px-5 mr-2 rounded  hover:bg-red-800 hover:text-white'
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className='py-3 px-5 mr-2 rounded  hover:bg-red-800 hover:text-white'
        to='instructors'
      >
        Instructors
      </NavLink>
      <NavLink
        className='py-3 px-5 mr-2 rounded  hover:bg-red-800 hover:text-white'
        to='allClasses'
      >
        All Classes
      </NavLink>
    </>
  );
  return (
    <header className='bg-slate-700'>
      <div className='navbar bg-transparent text-white allContainer'>
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
              className='w-[120px]'
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
              <div className='flex items-center'>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full border-red-600'>
                    <img src={user?.photoURL || <FaUserAlt />} />
                  </div>
                </label>
                <div className='ml-2'>
                  {theme ? (
                    <FaMoon
                      onClick={handleDarkTheme}
                      className='text-black text-2xl'
                    ></FaMoon>
                  ) : (
                    <FaMoon
                      id='dark'
                      onClick={handleDarkTheme}
                      className='text-text-white text-2xl'
                    ></FaMoon>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-slate-400 rounded-box w-52 z-50'
              >
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link to={dashboard} className='justify-between'>
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
            <>
              <Link to='/login' className=''>
                Login
              </Link>
              {theme ? (
                <FaMoon
                  onClick={handleDarkTheme}
                  className='text-black text-2xl'
                ></FaMoon>
              ) : (
                <FaMoon
                  id='dark'
                  onClick={handleDarkTheme}
                  className='text-text-white text-2xl'
                ></FaMoon>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
