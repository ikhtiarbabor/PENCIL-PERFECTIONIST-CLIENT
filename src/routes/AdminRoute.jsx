import { Navigate, useLocation } from 'react-router-dom';
import useUserCk from '../hooks/useUserCk';

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const [userRole, isUserLoading] = useUserCk();
  if (isUserLoading) {
    return <div>loading.........</div>;
  }
  if (userRole == 'admin') {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default AdminRoute;
