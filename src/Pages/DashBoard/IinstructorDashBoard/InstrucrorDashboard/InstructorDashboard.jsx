import useInstructorClasses from "../../../../hooks/useInstructorClasses";

const InstructorDashboard = () => {
    const {instructorClass}=useInstructorClasses()

  return (
    <section className='allContainer my-5'>
      <div className='md:grid grid-cols-4 gap-5'>
        <div className='bg-gradient-to-r from-teal-200 to-lime-200 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2 className='text-2xl bold'>Total Classes</h2>
          <p className='text-4xl py-3 bold'>{instructorClass?.length}</p>
        </div>
        <div className='bg-gradient-to-r from-red-200 to-red-600 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Applied Classes </h2>
        </div>
        <div className='bg-gradient-to-r from-green-200 via-green-400 to-green-500 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total Students</h2>
        </div>
        <div className='bg-gradient-to-r from-green-300 to-purple-400 text-black tet-center py-5 rounded  flex flex-col justify-center items-center'>
          <h2>Total Balance</h2>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default InstructorDashboard;
