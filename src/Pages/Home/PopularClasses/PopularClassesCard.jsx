import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import useUserCk from '../../../hooks/useUserCk';
// import useSecureUrl from '../../../hooks/useSecureUrl'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import useBooked from '../../../hooks/useBooked';
import useAuthContext from '../../../hooks/useAuthContext';
import useTokenConfig from '../../../hooks/useTokenConfig';
import useEnrolled from '../../../hooks/useEnrolled';

const PopularClassesCard = ({ popularClass }) => {
  const { enrolled } = useEnrolled();
  const [config] = useTokenConfig();
  const [userRole] = useUserCk();
  const { booking, refetch } = useBooked();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { imageURL, subCategory, price, stage, className, classDetails, _id } =
    popularClass;
  const booked = booking.find((booking) => booking.classId === _id);
  const enroll = enrolled.find((e) => e.classId === _id);

  const handleBookmark = async (id) => {
    if (!user) {
      Swal.fire({
        title: 'Bookmark',
        text: 'if you want to bookmark this please login',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    } else {
      await axios
        .post(
          'http://localhost:5000/classes/booked',
          {
            email: user?.email,
            classId: id,
          },
          config
        )
        .then((res) => {
          if (res.data.insertedId) {
            toast(`✔️You Bookmark This Class`);
            refetch();
          }
        });
    }
  };
  const handleRemoveBookmark = async (id) => {
    console.log(id);
    await axios
      .delete(`http://localhost:5000/classes/deleteBooked/${id}`, config)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          toast(`❌ You delete this class from bookmark`);
          refetch();
        }
      });
  };
  return (
    <div
      id='darkBg'
      className='mb-5 md:md-0 card w-96 bg-transparent shadow-xl duration-200 border-2 border-white'
      data-aos='zoom-in'
    >
      <figure className='px-10 pt-10 relative'>
        <img
          src={imageURL}
          alt={className}
          className='rounded-xl hover:scale-125 overflow-hidden h-64 transition-all popularClassImg '
        />
      </figure>
      <div className='card-body bg-transparent'>
        <div>
          <p className='flex justify-between'>
            <span className='bg-gray-200 rounded p-1 text-black'>
              {subCategory}
            </span>
            <span className='font-bold'>${price}</span>
          </p>
          <p>
            <span>{stage}</span> <span>{}</span>
          </p>
        </div>
        <h2 className='card-title'>{className}</h2>
        <div className='flex'>
          <p>
            {classDetails.slice(0, 60)}...{' '}
            <button className='text-blue-700 underline"'>View Course</button>
          </p>
        </div>
        <div className='card-actions flex justify-between'>
          {userRole === 'instructor' || userRole === 'admin' ? (
            <button
              disabled
              className='btn btn-primary disabled:bg-gray-300 disabled:text-black'
            >
              Student Only
            </button>
          ) : enroll !== undefined ? (
            <button
              disabled
              className='btn btn-primary disabled:bg-gray-300 disabled:text-black'
            >
              enrolled
            </button>
          ) : (
            <button className='btn btn-primary bg-gray-300 text-black'>
              Enroll Now
            </button>
          )}
          {enroll || userRole === 'admin' || userRole === 'instructor' ? (
            <button
              disabled
              className='text-[#E5E7EB]'
              onClick={() => handleBookmark(_id)}
            >
              <FaRegBookmark className='text-4xl'></FaRegBookmark>
            </button>
          ) : !booked ? (
            <button className='' onClick={() => handleBookmark(_id)}>
              <FaRegBookmark className='text-4xl'></FaRegBookmark>
            </button>
          ) : (
            <button onClick={() => handleRemoveBookmark(booked._id)}>
              <FaBookmark className='text-4xl' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
