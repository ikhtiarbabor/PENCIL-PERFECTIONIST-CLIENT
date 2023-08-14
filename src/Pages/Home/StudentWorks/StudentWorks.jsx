import ImageComponenet from './ImageComponenet';

export default function StudentWorks() {
  return (
    <section className='allContainer my-7'>
      <h2 className='section-head'>Student Works</h2>
      <div className='grid md:grid-cols-[2fr,1fr] gap-5'>
        <div className='grid md:grid-rows-2 gap-7'>
          <div className='grid md:grid-cols-2 gap-7'>
            <ImageComponenet
              height='350px'
              stuName='Omar Faruk'
              imgUrl='https://img.freepik.com/free-vector/grunge-hand-paint-splashes_1394-1104.jpg?w=740&t=st=1691501981~exp=1691502581~hmac=20ca3fa1756aedf198c6426ddbc90a65e17e213dc87a53f9179ae832795bc916'
            />
            <ImageComponenet
              height='350px'
              stuName='Md. Mustafa'
              imgUrl='https://img.freepik.com/premium-photo/oil-color-painting-beautiful-spring-landscape_710157-558.jpg?w=360'
            />
          </div>
          <ImageComponenet
            height='550px'
            stuName='Md. Usman'
            imgUrl='https://img.freepik.com/free-photo/coral-fish-around-sha-ab-mahmud_1360-219.jpg?t=st=1691503098~exp=1691503698~hmac=443e6ee72be88636ee833521df465772914ae0350459d9df8f33163f9c472df9'
          />
        </div>
        <div
          data-aos='zoom-in'
          className='bg-cover bg-center bg-blend-multiply h-[400px] md:h-full flex justify-center items-center'
          style={{
            backgroundImage: `url(https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?w=996&t=st=1691503098~exp=1691503698~hmac=6af345dab55789b269d1dd1527d27c69063686849b14d2be48a5f1d00d89021f)`,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        >
          <span className='text-white text-3xl'>Abu Bakar</span>
        </div>
      </div>
    </section>
  );
}
