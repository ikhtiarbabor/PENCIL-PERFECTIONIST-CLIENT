import { Navigate, useLocation } from 'react-router-dom';
import useUserCk from '../hooks/useUserCk';
import useAuthContext from '../hooks/useAuthContext';

const StudentsRoute = ({ children }) => {
  const { logOut } = useAuthContext();
  const location = useLocation();
  const [userRole, isUserLoading] = useUserCk();
  if (isUserLoading) {
    return (
      <div className='allContainer mx-auto h-[500px] flex justify-center items-center'>
        <div
          className='inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-red-600 motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </div>
    );
  }
  if (userRole == 'student') {
    return children;
  } else {
    logOut().then(() => {});
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default StudentsRoute;
