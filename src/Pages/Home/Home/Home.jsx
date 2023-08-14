import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Curriculum from '../Carriculam/Curriculum';
import CounterSection from '../CounterSection/CounterSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import StudentWorks from '../StudentWorks/StudentWorks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CounterSection />
      <PopularClasses />
      <AboutUs />
      <div className='hidden md:block'>
        <Curriculum slidesPerView={3} />
      </div>
      <div className='hidden sm:block md:hidden'>
        <Curriculum slidesPerView={2} />
      </div>
      <div className='block sm:hidden md:hidden'>
        <Curriculum slidesPerView={1} />
      </div>
      <StudentWorks />
      <PopularInstructors />
    </div>
  );
};

export default Home;
