import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularClassesCard from './PopularClassesCard';

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    const classesData = async () => {
      await axios
        .get(
          'https://pencil-perfectionist-server.vercel.app/classes/popularClasses'
        )
        .then((res) => setPopularClasses(res.data));
    };
    classesData();
  }, []);
  return (
    <section className='allContainer my-5'>
      <h2 className='section-head'>Highest Rated Online Courses</h2>
      <div className='md:grid grid-cols-3 gap-7'>
        {popularClasses.map((popularClass) => (
          <PopularClassesCard
            popularClass={popularClass}
            key={popularClass._id}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
