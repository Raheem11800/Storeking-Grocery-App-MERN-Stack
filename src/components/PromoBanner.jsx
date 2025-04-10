import React from "react";
import image1 from "../assets/CardsImages/collected_from_garden-cover.jpg";
import image2 from "../assets/CardsImages/seasonal_fruits-cover.jpg";
import image3 from "../assets/CardsImages/special_offer_on_seafood-cover.jpg";

function PromoBanner() {
  // Data for promotional images
  const PromoData = [{ Image: image1 }, { Image: image2 }, { Image: image3 }];

  return (
    <div className="w-full flex justify-center mt-20">
      {/* Container to hold the promo banners, centering the content */}
      <div className="flex gap-5 max-w-[1200px] w-full px-4 ">
        {/* Loop through PromoData to display each promotional image */}
        {PromoData.map((item, index) => (
          <img
            key={index}
            src={item.Image} // Set the source of the image
            alt={`Promo ${index + 1}`} // Alt text for accessibility
            className="rounded-xl w-full h-auto max-h-[200px] object-cover" // Styling for rounded corners, width, height, and image scaling
          />
        ))}
      </div>
    </div>
  );
}

export default PromoBanner;
