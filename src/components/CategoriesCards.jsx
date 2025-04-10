import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CategoriesCards.css";
import imag1 from "../assets/CardsImages/food-thumb.png";
import imag2 from "../assets/CardsImages/fresh_fruits-thumb.png";
import imag3 from "../assets/CardsImages/fresh_vegetables-thumb.png";
import imag4 from "../assets/CardsImages/fruits_&_vegetables-thumb.png";
import imag5 from "../assets/CardsImages/meat_&_fish-thumb.png";
import imag6 from "../assets/CardsImages/nuts_&_dry_fruits-thumb.png";
import imag7 from "../assets/CardsImages/wafers-thumb.png";
import imag8 from "../assets/CardsImages/tomato_sauce-thumb.png";
import imag9 from "../assets/CardsImages/sauces_&_pickles-thumb.png";
import imag10 from "../assets/CardsImages/pickles-thumb.png";
import imag11 from "../assets/CardsImages/other_table_sauce-thumb.png";
import imag12 from "../assets/CardsImages/cooking_sauce-thumb.png";
import imag13 from "../assets/CardsImages/chocolates-thumb.png";
import imag14 from "../assets/CardsImages/chicken-thumb.png";
import imag15 from "../assets/CardsImages/candy_&_chocolates-thumb.png";
import imag16 from "../assets/CardsImages/candies-thumb.png";

// Define the CategoriesCards component
function CategoriesCards() {
  // CardData contains all the information for the categories, including the images and text
  const CardData = [
    { Image: imag1, text: "Food" },
    { Image: imag2, text: "Fresh Fruits" },
    { Image: imag3, text: "Fresh Vegetables" },
    { Image: imag4, text: "Fruits & Vegetables" },
    { Image: imag5, text: "Meat & Fish" },
    { Image: imag6, text: "Nuts & Dry Fruits" },
    { Image: imag7, text: "Wafers" },
    { Image: imag8, text: "Tomato Sauce" },
    { Image: imag9, text: "Sauces & Pickles" },
    { Image: imag10, text: "Pickles" },
    { Image: imag11, text: "Other Table Sauce" },
    { Image: imag12, text: "Cooking Sauce" },
    { Image: imag13, text: "Chocolates" },
    { Image: imag14, text: "Chicken" },
    { Image: imag15, text: "Candy & Chocolates" },
    { Image: imag16, text: "Candies" },
  ];

  return (
    <div className="w-full px-4 mt-10">
      {" "}
      {/* Wrapper div with padding and margin for spacing */}
      <h1 className="text-[30px] font-bold ml-2 mb-5">
        Browse by Categories
      </h1>{" "}
      {/* Heading for the categories section */}
      {/* Swiper component for the carousel/slider of category cards */}
      <Swiper
        modules={[Navigation]} // Enable navigation (next/prev arrows)
        spaceBetween={50} // Space between slides
        slidesPerView={6} // Number of slides to display at once
        navigation={true} // Enable navigation
        loop={true} // Enable looping of slides
      >
        {/* Loop through each item in CardData to create SwiperSlide components */}
        {CardData.map((item, index) => (
          <SwiperSlide key={index}>
            {" "}
            {/* Unique key for each slide */}
            {/* Category card */}
            <div className="h-44 w-60 shadow-md rounded-lg flex flex-col items-center justify-center p-2 bg-gray-100 hover:bg-white hover:text-[#01BE5F] group hover:shadow-lg transition-all duration-300">
              {/* Image for the category */}
              <img
                src={item.Image}
                alt={item.text}
                className="h-24 w-24 object-contain mb-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
              />
              {/* Category text */}
              <p className="text-center font-medium">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoriesCards;
