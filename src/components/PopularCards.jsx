import React from "react";
import "./CategoriesCards.css";
import imag1 from "../assets/CardsImages/pampers-cover.png";
import imag2 from "../assets/CardsImages/dove-cover.png";
import imag3 from "../assets/CardsImages/nature_valley-cover.png";
import imag4 from "../assets/CardsImages/great_value-cover.png";
import imag5 from "../assets/CardsImages/suave-cover.png";
import imag6 from "../assets/CardsImages/johnson-cover.png";

function PopularCards() {
  // Card data to be displayed
  const CardData = [
    { Image: imag1, text: "Pampers" },
    { Image: imag2, text: "Dove" },
    { Image: imag3, text: "Nature Valley" },
    { Image: imag4, text: "Great Value" },
    { Image: imag5, text: "Suave" },
    { Image: imag6, text: "Johnson" },
  ];

  return (
    <div className="w-full px-4 mt-10">
      {/* Title for the Popular Brands section */}
      <h1 className="text-[30px] font-bold ml-2 mb-5">Popular Brands</h1>

      {/* Grid layout for displaying the brand cards */}
      <div className="grid grid-cols-6 gap-4">
        {/* Loop through each item in CardData and display it */}
        {CardData.map((item, index) => (
          <div
            key={index}
            className="h-40 w-full shadow-md rounded-lg flex flex-col items-center justify-center p-2 bg-white hover:text-[#01BE5F] hover:cursor-pointer"
          >
            {/* Display brand logo/image */}
            <img
              src={item.Image}
              alt={item.text}
              className="h-7 w-14 object-contain mb-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            {/* Display brand name */}
            <p className="text-center font-medium pt-8 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Horizontal line to separate sections */}
      <hr className="border-t border-gray-200 my-16 w-full" />
    </div>
  );
}

export default PopularCards;
