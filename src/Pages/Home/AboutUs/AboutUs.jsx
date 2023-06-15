const AboutUs = () => {
  return (
    <section id="aboutUs" className='py-12 bg-[url(https://i.ibb.co/h2GxGMz/IMG-5373-0.jpg)] bg-[rgba(0,0,0,.7)] text-white bg-blend-multiply bg-fixed bg-cover bg-center'>
      <div className='allContainer grid grid-cols-2 gap-7'>
        <div>
          <img
            src='https://i.ibb.co/SRq3jH2/professional-artist-painting-a-picture-on-canvas-FKG2-CJ.jpg'
            alt=''
            className='block'
          />
        </div>

        <div className='flex flex-col justify-center'>
          <h2 className='section-head'>About Us</h2>
          <p>
            Drawing online institutions are virtual platforms that provide
            individuals with the opportunity to learn and improve their drawing
            skills remotely. With the advent of technology and the widespread
            availability of the internet, these online institutions have gained
            popularity as convenient and accessible learning options for
            aspiring artists and enthusiasts.
          </p>
          <p>
            One of the primary advantages of drawing online institutions is the
            flexibility they offer. Students can access classes and tutorials
            from the comfort of their own homes and choose their preferred
            learning schedule. This flexibility is particularly beneficial for
            those with busy lifestyles or individuals who reside in areas where
            physical drawing schools might not be easily accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
