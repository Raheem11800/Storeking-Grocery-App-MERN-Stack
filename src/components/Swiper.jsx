import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Slider1 from '../assets/Slider_Images/1.png';
import Slider2 from '../assets/Slider_Images/2.png';
import Slider3 from '../assets/Slider_Images/3.png';

const AutoSwiper = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-[80%] h-[400px]  rounded-lg shadow-lg overflow-hidden">
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{ 
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true} 
          modules={[Pagination, Autoplay]}
          className="h-full w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <img src={Slider1} alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img src={Slider2} alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img src={Slider3} alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AutoSwiper;
