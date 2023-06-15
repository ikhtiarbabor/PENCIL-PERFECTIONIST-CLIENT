const InstructorCard = ({ instructor }) => {
  const { photoURL, displayName } = instructor;
  return (
    <div className=' my-3 md:my-0 h-64'>
      <div
        className='card card-compact w-96 bg-transparent border-2 border-white shadow-xl py-6'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <figure>
          <img src={photoURL} alt={displayName} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{displayName}</h2>
          <p>
            Artists are driven by a deep passion for their craft and a desire to
            communicate and connect with others. They possess a natural
            inclination to observe, interpret, and interpret the world around
            them, seeking to express their thoughts, ideas, and perspectives
            through their chosen artistic medium. Artists often possess a keen
            sense of aesthetics, composition, and storytelling, allowing them to
            create works that are visually and emotionally impactful.
          </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>See Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
