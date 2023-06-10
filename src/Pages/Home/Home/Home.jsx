import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses />
      <PopularInstructor />
    </div>
  );
};

export default Home;
