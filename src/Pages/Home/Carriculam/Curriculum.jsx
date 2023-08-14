// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Curriculum({ slidesPerView }) {
  return (
    <>
      <section className='allContainer my-7'>
        <h2 className='section-head'>Standard Curriculum </h2>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div
              data-aos='flip-left'
              className='h-[350px] flex flex-col justify-center items-center '
            >
              <div className='h-[100px] w-[100px] rounded-full bg-[url(https://artfulparent.com/wp-content/uploads/2021/08/Kids-drawing-featured-image.png)] bg-cover bg-center bg-no-repeat'></div>

              <h3 className='text-center font-bold text-xl'>
                Elementary Artist
              </h3>
              <p className='text-center'>
                Drawing is a visual art that uses an instrument to mark paper or
                another two-dimensional surface.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='flip-left'
              className='h-[350px] flex flex-col justify-center items-center'
            >
              <div className='h-[100px] w-[100px] rounded-full bg-[url(https://mymodernmet.com/wp/wp-content/uploads/2018/06/dusan-krtolica-art-11.jpg)] bg-cover bg-center bg-no-repeat'></div>
              <h3 className='text-center font-bold text-xl'>
                Middle (10-15) Artist
              </h3>
              <p className='text-center'>
                Drawing is a visual art that uses an instrument to mark paper or
                another two-dimensional surface.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='flip-left'
              className='h-[350px] flex flex-col justify-center items-center'
            >
              <div className='h-[100px] w-[100px] rounded-full bg-[url(https://www.wandsworth.gov.uk/media/10344/louis-600.jpg)] bg-cover bg-center bg-no-repeat'></div>
              <h3 className='text-center font-bold text-xl'>
                Kinder (16-25) Artist
              </h3>
              <p className='text-center'>
                Drawing is a visual art that uses an instrument to mark paper or
                another two-dimensional surface.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='flip-left'
              className='h-[350px] flex flex-col justify-center items-center'
            >
              <div className='h-[100px] w-[100px] rounded-full bg-[url(https://img.theepochtimes.com/assets/uploads/2020/05/02/Professional-Artist-i-a.jpg)] bg-cover bg-center bg-no-repeat'></div>
              <h3 className='text-center font-bold text-xl'>
                Professional Artist
              </h3>
              <p className='text-center'>
                Drawing is a visual art that uses an instrument to mark paper or
                another two-dimensional surface.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
