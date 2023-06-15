import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='Outlet'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
