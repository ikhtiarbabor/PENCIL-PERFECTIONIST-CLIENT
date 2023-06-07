import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError('');
  console.log(error.message);
  console.log(status);
  return (
    <div className='max-w-7xl mx-auto text-center'>
      <img
        src='https://i.ibb.co/mDfgDmr/404.png'
        className='w-1/2 mx-auto'
        alt=''
      />
      <h2 className='text-3xl bold'>{status}</h2>
      <h3>{error.message}</h3>
      <Link to='/' className='btn-primary'>
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
