import { useEffect, useState } from 'react';
import InstructorCard from '../../Instructors/InstructorCard';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('https://pencil-perfectionist-server.vercel.app/instructors')
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  const popularInstructor = instructors.slice(0, 6);
  console.log(popularInstructor);
  return (
    <section className='allContainer my-7'>
      <h2 className='section-head'>Popular Instructor</h2>
      <div className='md:grid grid-cols-3 gap-7'>
        {popularInstructor.map((instructor) => (
          <InstructorCard
            instructor={instructor}
            key={instructor._id}
          ></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
