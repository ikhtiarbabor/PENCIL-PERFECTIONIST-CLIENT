import { useForm } from 'react-hook-form';
import useAuthContext from '../../hooks/useAuthContext';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  //TODO: UPDATE UI ADD GITHUB LOGIN SYSTEM ,ADD SHOW PASSWORD HIDE PASSWORD
  const { signIn, googleSignIn, user } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(async (result) => {
        const { email, displayName, photoURL } = result.user;
        await axios
          .post('https://pencil-perfectionist-server.vercel.app/users', {
            email,
            displayName,
            photoURL,
            role: 'student',
          })
          .then((data) => console.log(data.data));
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <>
      {user ? (
        <Navigate to={from}></Navigate>
      ) : (
        <section className='allContainer'>
          <div className='md:w-1/3 mx-auto px-2'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor='email' className='block py-1 uppercase'>
                  Email
                </label>
                <input
                  id='email'
                  className='border-2 border-black p-3 w-full rounded'
                  {...register('email', { required: true })}
                />
              </div>
              <div className='py-2'>
                <label htmlFor='password' className='block py-1 uppercase'>
                  Password
                </label>

                <input
                  type='password'
                  id='password'
                  className='border-2 border-black p-3 w-full rounded'
                  {...register('password', { required: true })}
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <div>
                <span>
                  New to Principal Perfectionist?{' '}
                  <Link to='/register' className='underline text-blue-600'>
                    register
                  </Link>
                </span>
              </div>

              <input type='submit' className='btn-primary my-3' />
              <p className='text-red-500'>{error}</p>
            </form>

            <div className='divider'>OR</div>
            <div className='text-center'>
              <button
                onClick={handleGoogleLogin}
                className='btn-primary rounded-full bg-transparent border-slate-900 hover:bg-slate-900 hover:text-white text-black'
              >
                <FaGoogle />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
