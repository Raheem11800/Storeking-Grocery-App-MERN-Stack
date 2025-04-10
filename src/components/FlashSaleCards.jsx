import React from "react";
import img1 from "../assets/CardsImages/1.png";
import img2 from "../assets/CardsImages/2.png";
import img3 from "../assets/CardsImages/3.png";
import img4 from "../assets/CardsImages/4.png";
import img5 from "../assets/CardsImages/5.png";
import img6 from "../assets/CardsImages/6.png";
import img7 from "../assets/CardsImages/7.png";
import img8 from "../assets/CardsImages/8.png";
import img9 from "../assets/CardsImages/9.png";
import img10 from "../assets/CardsImages/10.png";

function Cards() {
  const cards = [
    {
      Image: img1,
      title: "Overnight Diaper Size 6",
      text: "Packet",
      price: "$33.250",
      Cprice: "$35.000",
    },
    {
      Image: img2,
      title: "Ladies Finger",
      text: "Kilogram",
      price: "$19.000",
      Cprice: "$25.000",
    },
    {
      Image: img3,
      title: "Beef T-bone Steak",
      text: "Packet",
      price: "$42.750",
      Cprice: "$45.000",
    },
    {
      Image: img4,
      title: " Vanilla Air Freshener Spray",
      text: "Piece",
      price: "$180.000",
      Cprice: "$200.000",
    },
    {
      Image: img5,
      title: "Potato Regular",
      text: "Kilogram",
      price: "$9.800",
      Cprice: "$10.000",
    },
    {
      Image: img6,
      title: "Red Tomato",
      text: "Kilogram",
      price: "$33.250",
      Cprice: "$35.000",
    },
    {
      Image: img7,
      title: "Local Onion",
      text: "Kilogram",
      price: "$23.750",
      Cprice: "$25.000",
    },
    {
      Image: img8,
      title: "Coriander Leaves",
      text: "Gram",
      price: "$42.750",
      Cprice: "$45.000",
    },
    {
      Image: img9,
      title: "Antibacterial Liquid Dish Soap",
      text: "Milliliter",
      price: "$60.000",
      Cprice: "$65.000",
    },
    {
      Image: img10,
      title: "Vanilla Almond Crunch Cereal",
      text: "Gram",
      price: "$144.500",
      Cprice: "$170.000",
    },
  ];

  return (
    <div>
      <h1 className="text-[30px] font-bold ml-7 mt-10">Flash Sale</h1>
      <div className="grid grid-cols-5 gap-5 p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-auto mt-5 border rounded-2xl shadow-lg border-gray-200 h-auto p-4"
          >
            <img
              className="w-auto rounded-xl transition-all duration-300 hover:scale-105 hover:rotate-3"
              src={card.Image}
              alt="Card"
            />
            <div className="pt-4">
              <p className="text-md font-medium text-gray-900 pb-2">
                {card.title}
              </p>
              <p className="text-[10px] text-gray-600 pb-2">{card.text}</p>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-[#01BE5F] font-bold text-lg">{card.price}</p>
                <p className="text-[#95A3B9] line-through pl-5 text-xs">
                  {card.Cprice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
