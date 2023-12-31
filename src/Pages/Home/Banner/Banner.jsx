import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  // TODO: ADD PARTICLE JS AND BANNER DETAILS TEXT
  return (
    <div className='allContainer'>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src='https://i.ibb.co/tzQwBLd/Portraits.jpg' />
        </div>
        <div>
          <img src='https://i.ibb.co/Cb0QLCc/Still-Life.jpg' />
        </div>
        <div>
          <img src='https://i.ibb.co/yFcPmL4/Architectural-Drawings.jpg' />
        </div>
        <div>
          <img src='https://i.ibb.co/5rvbj9j/Cartooning-and-Comics.jpg' />
        </div>
        <div>
          <img src='https://i.ibb.co/vD1x5HG/Fantasy-and-Sci-Fi-Art.jpg' />
        </div>
        <div>
          <img src='https://i.ibb.co/C7Ht7kV/Fashion-Illustration.jpg' />
        </div>
        <div>
          <img src='https://i.ibb.co/z2D9FX0/Land-scape.jpg' />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
