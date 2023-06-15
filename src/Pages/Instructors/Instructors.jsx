import { useEffect, useState } from 'react';
import AllPageBanner from '../Shared/allPageBanner/allPageBanner';
import InstructorCard from './InstructorCard';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('https://pencil-perfectionist-server.vercel.app/instructors')
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);
  return (
    <>
      <AllPageBanner>Instructors</AllPageBanner>
      <section className='allContainer py-10'>
        <div className='md:grid grid-cols-3 gap-7'>
          {instructors.map((instructor) => (
            <InstructorCard
              instructor={instructor}
              key={instructor._id}
            ></InstructorCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Instructors;
