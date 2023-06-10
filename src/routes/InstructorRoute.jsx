import { Navigate, useLocation } from 'react-router-dom';
import useUserCk from '../hooks/useUserCk';
import useAuthContext from '../hooks/useAuthContext';

const InstructorRoute = ({ children }) => {
  const { logOut } = useAuthContext();
  const location = useLocation();
  const [userRole, isUserLoading] = useUserCk();
  if (isUserLoading) {
    return <div>loading.........</div>;
  }
  if (userRole === 'instructor') {
    return children;
  } else {
    logOut().then(() => {});
  }

  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default InstructorRoute;
