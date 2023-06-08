import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return <div>loading</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
