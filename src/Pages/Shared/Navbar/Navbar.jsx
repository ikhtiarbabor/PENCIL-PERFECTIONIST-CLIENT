import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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
          <Link to='/login'className=''>Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
