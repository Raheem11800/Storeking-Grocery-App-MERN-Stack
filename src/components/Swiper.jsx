import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Slider1 from "../assets/Slider_Images/1.png";
import Slider2 from "../assets/Slider_Images/2.png";
import Slider3 from "../assets/Slider_Images/3.png";

const AutoSwiper = () => {
  return (
    // Container to center the Swiper
    <div className="flex justify-center items-center">
      {/* Wrapper for the Swiper with fixed height and width */}
      <div className="w-full h-[535px] rounded-lg shadow-lg overflow-hidden">
        <Swiper
          // Enable pagination bullets with dynamic styling
          pagination={{ dynamicBullets: true }}
          // Enable autoplay with a 2-second delay
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // Enable infinite loop
          loop={true}
          // Register Swiper modules
          modules={[Pagination, Autoplay]}
        >
          {/* Slide 1 */}
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={Slider1}
              alt="Slide 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={Slider2}
              alt="Slide 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={Slider3}
              alt="Slide 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AutoSwiper;
