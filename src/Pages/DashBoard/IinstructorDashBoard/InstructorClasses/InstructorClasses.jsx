import useInstructorClasses from '../../../../hooks/useInstructorClasses';
import enrollImg from '../../../../../public/icons/add-friend.png';
import seatImg from '../../../../../public/icons/seats.png';
import { AiFillDelete } from 'react-icons/ai';
const InstructorClasses = () => {
  const { instructorActiveClass } = useInstructorClasses();

  console.log(instructorActiveClass);
  return (
    <section className='allContainer'>
      <h2>Total Active Classes {instructorActiveClass.length}</h2>
      {instructorActiveClass.map((c) => (
        <div className='hero rounded my-5' key={c?._id}>
          <div className='hero-content flex-col lg:flex-row'>
            <img src={c?.imageURL} className='max-w-sm rounded-lg shadow-2xl' />
            <div>
              <div className='flex justify-between'>
                {' '}
                <h1 className='text-5xl font-bold'>{c?.className}</h1>
                <h1 className='text-5xl font-bold'>${c?.totalEarn || 0}</h1>
              </div>

              <p className='py-6'>{c?.classDetails}</p>
              <div className='md:flex  justify-between '>
                <p className='flex'>
                  <img src={enrollImg} alt='' className='w-[30px]' />
                  <span className='text-2xl'>&nbsp;: {c?.totalEnrolled}</span>
                </p>
                <p className='flex'>
                  <img src={seatImg} alt='' className='w-[30px]' />
                  <span className='text-2xl'>&nbsp;: {c?.seat}</span>
                </p>
                <p className='flex'>
                  <span className='text-2xl rounded-full border-2 w-[40px] h-[40px] border-green-700 text-green-700 bg-white text-center'>
                    $
                  </span>
                  <span className='text-2xl'>&nbsp;: ${c?.price}</span>
                </p>
                <p>
                  <button className='btn rounded-full border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white'>
                    <AiFillDelete></AiFillDelete>
                  </button>
                </p>
                <p>
                  <button className='btn  border-red-700 text-red-700 bg-white text-base hover:bg-red-700 hover:text-white'>
                    Add Class Link
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InstructorClasses;
