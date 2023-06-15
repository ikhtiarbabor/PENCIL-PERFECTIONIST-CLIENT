import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CounterSection from '../CounterSection/CounterSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CounterSection />
      <PopularClasses />
      <AboutUs />
      <PopularInstructors />
    </div>
  );
};

export default Home;
