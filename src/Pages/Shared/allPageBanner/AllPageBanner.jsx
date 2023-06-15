const AllPageBanner = ({ children }) => {
  return (
    <section className='flex justify-center items-center bg-banner bg-[url(https://i.ibb.co/xXDThSV/concept-art.jpg)] h-[400px] bg-no-repeat bg-center bg-cover bg-blend-multiply'>
      <h2 className='text-white uppercase italic text-5xl'>{children}</h2>
    </section>
  );
};

export default AllPageBanner;
