import useClasses from '../../hooks/useClasses';
import PopularClassesCard from '../Home/PopularClasses/PopularClassesCard';

const AllClassesPage = () => {
  const { classes } = useClasses();
  const portraits = classes.filter((c) => c.subCategory === 'Portraits');
  const stillLife = classes.filter((c) => c.subCategory === 'Still Life');
  const animals = classes.filter((c) => c.subCategory === 'Animals');
  const cartoon = classes.filter(
    (c) => c.subCategory === 'Cartooning and Comics'
  );
  const concept = classes.filter((c) => c.subCategory === 'Concept Art');
  const fashion = classes.filter(
    (c) => c.subCategory === 'Fashion Illustration'
  );
  const architectural = classes.filter(
    (c) => c.subCategory === 'Architectural Drawings'
  );
  const nature = classes.filter(
    (c) => c.subCategory === 'Nature and Botanical Illustration'
  );
  const fantasy = classes.filter(
    (c) => c.subCategory === 'Fantasy and Sci-Fi Art'
  );
  return (
    <>
      <section className='allContainer'>
        <h2 className='section-head'> Portraits Drawing</h2>
        {portraits.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Still Life Drawing</h2>
        {stillLife.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Animals Drawing</h2>
        {animals.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Cartooning and Comics</h2>
        {cartoon.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Concept Art</h2>
        {concept.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Fashion Illustration</h2>
        {fashion.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Architectural Drawings</h2>
        {architectural.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Nature and Botanical Illustration</h2>
        {nature.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
      <section className='allContainer'>
        <h2 className='section-head'> Fantasy and Sci-Fi Art</h2>
        {fantasy.map((c) => (
          <PopularClassesCard popularClass={c} key={c._id} />
        ))}
      </section>
    </>
  );
};

export default AllClassesPage;
