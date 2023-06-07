import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContext/AuthProvider';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
