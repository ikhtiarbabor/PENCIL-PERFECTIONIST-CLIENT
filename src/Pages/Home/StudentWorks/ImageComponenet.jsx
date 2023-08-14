export default function ImageComponenet({ imgUrl, height, stuName }) {
  return (
    <div
      data-aos='zoom-in'
      className={`bg-cover bg-center bg-blend-multiply h-[400px] md:h-[${height}] flex justify-center items-center`}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundColor: 'rgba(0,0,0,.5)',
      }}
    >
      <span className='text-white text-3xl'>{stuName}</span>
    </div>
  );
}
