import ClassesTable from './ClassesTable';
import useClasses from '../../../../hooks/useClasses';

const AllClasses = () => {
  const { classes, refetch } = useClasses();
  const tableHead = ['Image', 'Name', 'Action', 'Details'];
  const approvedClasses = classes.filter((c) => c.status === 'approved');
  return (
    <section className='allContainer'>
      <h1>Total Classes {classes?.length}</h1>
      <ClassesTable
        tableRow={approvedClasses}
        tableHead={tableHead}
        use='classes'
        refetch={refetch}
      />
    </section>
  );
};

export default AllClasses;
