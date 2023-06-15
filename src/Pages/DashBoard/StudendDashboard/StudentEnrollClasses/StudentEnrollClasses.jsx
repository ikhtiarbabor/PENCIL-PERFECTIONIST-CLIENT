import useEnrolled from '../../../../hooks/useEnrolled';
import ClassesTable from '../../Admin/AllClasses/ClassesTable';

const StudentEnrollClasses = () => {
  const { enrolledClasses } = useEnrolled();
  const tableHead = ['View', 'others','Class Link','Details'];
  return (
    <section className='allContainer'>
      <h2>Total Enrolled {enrolledClasses.length}</h2>
      <ClassesTable
        tableHead={tableHead}
        tableRow={enrolledClasses}
        use='enrolled'
      ></ClassesTable>
    </section>
  );
};

export default StudentEnrollClasses;
