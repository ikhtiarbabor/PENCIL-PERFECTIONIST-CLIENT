import useAllClassesAdmin from '../../../../hooks/useAllClassesAdmin';
import ClassesTable from '../AllClasses/ClassesTable';

const RejectClasses = () => {
  const { classesAdmin, refetch } = useAllClassesAdmin();
  const tableHead = ['Image', 'Name', 'Action', 'Details'];
  const rejectClasses = classesAdmin.filter((c) => c.status === 'reject');

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
