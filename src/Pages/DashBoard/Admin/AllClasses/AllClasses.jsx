import ClassesTable from './ClassesTable';
import useAllClassesAdmin from '../../../../hooks/useAllClassesAdmin';

const AllClasses = () => {
  const { classesAdmin, refetch } = useAllClassesAdmin();
  const tableHead = ['Image', 'Name', 'Action', 'Details'];
  const approvedClasses = classesAdmin.filter((c) => c.status === 'approved');
  return (
    <section className='allContainer'>
      <h1>Total Classes {approvedClasses?.length}</h1>
      <ClassesTable
        tableRow={approvedClasses}
        tableHead={tableHead}
        use='allClass'
        refetch={refetch}
      />
    </section>
  );
};

export default AllClasses;
