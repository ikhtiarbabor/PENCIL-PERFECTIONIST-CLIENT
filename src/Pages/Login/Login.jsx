import { useForm } from 'react-hook-form';
import useAuthContext from '../../hooks/useAuthContext';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
  const { signIn, googleSignIn } = useAuthContext();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
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

          <input type='submit' className='btn-primary my-3' />
        </form>
        <div className='divider'>OR</div>
        <div>
          <button onClick={handleGoogleLogin} className='btn-primary rounded-full bg-transparent border-slate-900 hover:bg-slate-900 hover:text-white text-black'>
            <FaGoogle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
