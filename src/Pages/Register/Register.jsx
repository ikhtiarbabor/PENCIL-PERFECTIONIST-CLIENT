import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';
const imgHost = import.meta.env.VITE_IMAGE_BB_API_KEY;

const Register = () => {
  const imageBbURL = `https://api.imgbb.com/1/upload?key=${imgHost}`;
  const { user, createUser, googleSignIn, updateUser } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  console.log(from);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const profile = data.image[0];
    console.log(profile);
    console.log(data.email);
    const formData = new FormData();
    formData.append('image', data.image[0]);
    console.log(formData);

    createUser(data.email, data.password)
      .then(async () => {
        await axios.post(imageBbURL, formData).then((res) => {
          console.log(res.data.data.url);
          updateUser(data.name, res.data.data.url).then(async () => {
            await axios
              .post('http://localhost:5000/users', {
                email: data.email,
                displayName: data.name,
                photoURL: res.data,
                role: 'student',
              })
              .then((data) => console.log(data.data));
          });
          console.log(res.data);
        });
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(async (result) => {
        const { email, displayName, photoURL } = result.user;
        await axios
          .post('http://localhost:5000/users', {
            email,
            displayName,
            photoURL,
            role: 'student',
          })
          .then((data) => console.log(data.data));
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
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
                <label htmlFor='name' className='block py-1 uppercase'>
                  Name
                </label>
                <input
                  id='name'
                  className='border-2 border-black p-3 w-full rounded'
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <label htmlFor='image' className='block py-1 uppercase'>
                  Profile
                </label>

                <input
                  id='image'
                  type='file'
                  className='border-2 border-black w-full rounded file-input-bordered file-input-md file-input'
                  {...register('image', { required: true })}
                />
              </div>
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
                  Already have an account?{' '}
                  <Link to='/login' className='underline text-blue-600'>
                    Login
                  </Link>
                </span>
              </div>

              <input type='submit' className='btn-primary my-3' />
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

export default Register;
