import CountUp from 'react-countup';
import { FaUserAlt, FaUserGraduate, FaUsers } from 'react-icons/fa';

const CounterSection = () => {
  return (
    <section className='allContainer bg-gray-300 rounded py-7'>
      <div className='md:grid grid-cols-3 justify-center'>
        <div className='flex text-4xl justify-center py-20'>
          <FaUsers className='mx-3' />
          <CountUp start={0} end={30000} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className='flex text-4xl justify-center md:border-l-2 md:border-r-2 py-20 md:border-gray-400'>
          <FaUserAlt className='mx-3' />
          <CountUp start={0} end={10000} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef}>10k</span>
              </div>
            )}
          </CountUp>
        </div>
        <div className='flex text-4xl justify-center py-20'>
          <FaUserGraduate className='mx-3' />
          <CountUp start={0} end={5000} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
