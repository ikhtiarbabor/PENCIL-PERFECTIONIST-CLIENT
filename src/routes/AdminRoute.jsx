import { Navigate, useLocation } from 'react-router-dom';
import useUserCk from '../hooks/useUserCk';
import useAuthContext from '../hooks/useAuthContext';

const AdminRoute = ({ children }) => {
  const { logOut } = useAuthContext();
  const location = useLocation();
  const [userRole, isUserLoading] = useUserCk();
  if (isUserLoading) {
    return <div>loading.........</div>;
  }
  if (userRole == 'admin') {
    return children;
  } else {
    logOut().then(() => {});
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default AdminRoute;