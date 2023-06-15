import { useLoaderData, useNavigate } from 'react-router-dom';
import AllPageBanner from '../Shared/allPageBanner/allPageBanner';
import useUserCk from '../../hooks/useUserCk';
import useEnrolled from '../../hooks/useEnrolled';
import useBooked from '../../hooks/useBooked';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAuthContext from '../../hooks/useAuthContext';
import useTokenConfig from '../../hooks/useTokenConfig';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const VewClasses = () => {
  const classData = useLoaderData();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [userRole] = useUserCk();
  const { enrolled } = useEnrolled();
  const { booking, refetch } = useBooked();
  const [config] = useTokenConfig();
  const {
    className,
    price,
    imageURL,
    instructor,
    _id,
    stage,
    subCategory,
    classDetails,
    totalEnrolled,
  } = classData;
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
          'https://pencil-perfectionist-server.vercel.app/classes/booked',
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
    await axios
      .delete(
        `https://pencil-perfectionist-server.vercel.app/classes/deleteBooked/${id}`,
        config
      )
      .then((res) => {
        if (res.data.deletedCount === 1) {
          toast(`❌ You delete this class from bookmark`);
          refetch();
        }
      });
  };
  const handleEnrolled = async (id) => {
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
          'https://pencil-perfectionist-server.vercel.app/classes/booked',
          {
            email: user?.email,
            classId: id,
          },
          config
        )
        .then((res) => {
          if (res.data.insertedId) {
            toast(`✔️You This Class for Enroll`);
            navigate('/dashboard/studentBookedClasses');
          }
        });
    }
  };
  console.log(classData);
  return (
    <>
      <AllPageBanner>{className}</AllPageBanner>
      <section className='py-5'>
        <div className='allContainer md:grid grid-cols-2 py-5'>
          <div className=''>
            <img src={imageURL} alt={className} className='rounded' />
          </div>
          <div className='card-body bg-transparent flex flex-col justify-center'>
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
            <div className='py-3'>
              <h2 className='font-bold'>Other Details</h2>
              <div className='grid grid-cols-2'>
                <div>Instructor :</div>
                <div>{instructor}</div>
                <div>Price :</div>
                <div>${price}</div>
                <div>Total Student :</div>
                <div>{totalEnrolled || 5}</div>
                <div>Category :</div>
                <div>{subCategory}</div>
                <div>Stage :</div>
                <div>{stage}</div>
              </div>
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
                  className='btn btn-primary disabled:bg-green-400 disabled:text-black'
                >
                  enrolled
                </button>
              ) : (
                <button
                  onClick={() => handleEnrolled(_id)}
                  className='btn btn-primary bg-red-700 text-white'
                >
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
        <div className='allContainer'>{classDetails}</div>
      </section>
    </>
  );
};

export default VewClasses;
