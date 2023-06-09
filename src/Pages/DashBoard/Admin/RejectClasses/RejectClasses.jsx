import useClasses from '../../../../hooks/useClasses';
import ClassesTable from '../AllClasses/ClassesTable';

const RejectClasses = () => {
  const { classes, refetch } = useClasses();
  const tableHead = ['Image', 'Name', 'Action', 'Details'];
  const rejectClasses = classes.filter((c) => c.status === 'reject');

  return (
    <section className='allContainer'>
      <h1>Total Reject Classes {rejectClasses?.length}</h1>
      <ClassesTable
        tableHead={tableHead}
        tableRow={rejectClasses}
        refetch={refetch}
      ></ClassesTable>
    </section>
  );
};

export default RejectClasses;
