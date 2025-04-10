import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTruckRampBox,
  faDesktop,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

function ServiceHighlights() {
  // Data for the service highlights, including icons, titles, and descriptions
  const highlightData = [
    {
      icon: faHeart,
      title: "Quality & Savings",
      text: "Comprehensive quality control and affordable prices",
    },
    {
      icon: faTruckRampBox,
      title: "Fast Delivery",
      text: "Fast and convenient door to door delivery",
    },
    {
      icon: faMoneyCheckDollar,
      title: "Secure Payment",
      text: "Different secure payment methods",
    },
    {
      icon: faDesktop,
      title: "Professional Service",
      text: "Efficient customer support from passionate team",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Loop through highlightData to display each service feature */}
      {highlightData.map((item, index) => (
        <div key={index} className="h-16 w-60 ml-10">
          {/* Display the icon and title in a flex row */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-xl text-[#01BE5F]"
            />{" "}
            {/* Icon */}
            <p className="text-base font-semibold capitalize">
              {item.title}
            </p>{" "}
            {/* Title */}
          </div>
          {/* Description below the title */}
          <p className="text-sm text-gray-600 pl-7">{item.text}</p>{" "}
          {/* Description text */}
        </div>
      ))}
    </div>
  );
}

export default ServiceHighlights;
