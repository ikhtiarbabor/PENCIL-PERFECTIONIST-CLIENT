import useClasses from '../../../../hooks/useClasses';
import ClassesTable from '../AllClasses/ClassesTable';

const PendingClasses = () => {
  const tableHead = ['Image', 'Name', 'Action', 'Details'];
  const { classes, refetch } = useClasses();
  const pendingClasses = classes.filter((c) => c.status === 'pending');

  return (
    <section className='allContainer'>
      <h1>Total Pending Classes {pendingClasses.length}</h1>
      <ClassesTable 
        tableRow={pendingClasses}
        refetch={refetch}
        use='pending'
        tableHead={tableHead}
      ></ClassesTable>
    </section>
  );
};

export default PendingClasses;
