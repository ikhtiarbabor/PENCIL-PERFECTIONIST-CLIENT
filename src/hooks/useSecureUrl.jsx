import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const useSecureUrl = () => {
    const { logOut } = useAuthContext(); 
    const navigate = useNavigate(); 
  
    const secureURL = axios.create({
      baseURL: 'http://localhost:5000', 
    });
  
    useEffect(() => {
      secureURL.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      secureURL.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOut();
            navigate('/login');
          }
          return Promise.reject(error);
        }
      );
    }, [logOut, navigate, secureURL]);
  
    return [secureURL];
  };
  
  export default useSecureUrl;