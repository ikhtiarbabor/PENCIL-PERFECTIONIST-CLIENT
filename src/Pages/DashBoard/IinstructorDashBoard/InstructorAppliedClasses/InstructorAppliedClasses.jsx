import useInstructorClasses from '../../../../hooks/useInstructorClasses';
import ClassesTable from '../../Admin/AllClasses/ClassesTable';

const InstructorAppliedClasses = () => {
  const { instructorPendingClass, instructorRejectClass } =
    useInstructorClasses();
  const appliedClasses = [...instructorPendingClass, ...instructorRejectClass];
  console.log(appliedClasses);
  const tableHead = ['Image', 'Name', 'Status', 'Reason'];
  return (
    <section className='allContainer'>
      <ClassesTable
        tableHead={tableHead}
        tableRow={appliedClasses}
        use='appliedClasses'
      />
    </section>
  );
};

export default InstructorAppliedClasses;
