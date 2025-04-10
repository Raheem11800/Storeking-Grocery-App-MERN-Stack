import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faList,
  faHeadset,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { navbar } from "../components/CSSHelper/Navbar_CSS";

function Navbar() {
  // States for controlling the visibility of dropdown menus at various levels
  const [OpenIndex, SetOpenIndex] = useState(null);
  const [SubOpenIndex, SetSubOpenIndex] = useState(null);
  const [SubSubOpenIndex, SetSubSubOpenIndex] = useState(null);

  // Ref to detect click outside of the category menu to close it
  const categoryRef = useRef(null);

  // Toggles the visibility of the main category dropdown
  const toggleCategory = () => {
    SetOpenIndex(OpenIndex === null ? 0 : null); // Opens the menu if closed, closes it if open
  };

  // Effect hook to handle clicks outside the category dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        SetOpenIndex(null); // Close the category dropdown
        SetSubOpenIndex(null); // Close any submenus
        SetSubSubOpenIndex(null); // Close any third-level submenus
      }
    };
    document.addEventListener("mousedown", handleClickOutside); // Listen for outside click
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
    };
  }, []);

  // Nested category structure with submenus and sub-submenus
  const category = [
    {
      text: "Food",
      submenu: [
        {
          text: "Fruits & Vegetables",
          submenu: [
            { text: "Fresh Vegetables" },
            { text: "Fresh Fruits" },
            { text: "Nuts & Dry Fruits" },
          ],
        },
        {
          text: "Meat & Fish",
          submenu: [
            { text: "Chicken" },
            { text: "Beef" },
            { text: "Frozen Fish" },
          ],
        },
        {
          text: "Sauces & Pickles",
          submenu: [
            { text: "Tomato Sauce" },
            { text: "Pickels" },
            { text: "Cooking Sauce" },
          ],
        },
        {
          text: "Candy & Choclates",
          submenu: [
            { text: "Choclates" },
            { text: "Wafers" },
            { text: "Candies" },
            { text: "Gums & Mint" },
          ],
        },
        {
          text: "Beverages",
          submenu: [
            { text: "Soft Drinks" },
            { text: "Tea" },
            { text: "Coffee" },
            { text: "Juice" },
          ],
        },
      ],
    },
    {
      text: "Cleaning Supplies",
      submenu: [
        { text: "Dish Wasshing Supplies" },
        { text: "Laundry" },
        { text: "Toilet Cleaners" },
        { text: "Nampkin & Paper Products" },
        { text: "Floor & Glass Cleaners" },
        { text: "Air Freshners" },
      ],
    },
    {
      text: "Personal Care",
      submenu: [
        {
          text: "Womens Care",
          submenu: [
            { text: "Womens Soap" },
            { text: "Serum & Toner" },
            { text: "Shampoo & Conditioner" },
            { text: "Female Moistrizer" },
            { text: "Womens Perfume" },
          ],
        },
        {
          text: "Mens Care",
          submenu: [
            { text: "Mens Soap" },
            { text: "Razors & Blades" },
            { text: "Shampoo & Conditioner" },
            { text: "Mens Perfume" },
          ],
        },
        {
          text: "Handwash",
          submenu: [
            { text: "Liquid Handwash" },
            { text: "Hand Sanitizer" },
          ],
        },
        {
          text: "Oral Care",
          submenu: [
            { text: "Toothpastes" },
            { text: "Toothbrushes" },
          ],
        },
      ],
    },
    {
      text: "Health & Wellness",
      submenu: [
        { text: "Keto Food" },
        { text: "Antiseptics" },
        { text: "Food Supplements" },
        { text: "Herbal & Digestive Aids" },
      ],
    },
    {
      text: "Baby Care",
      submenu: [
        { text: "Diapers" },
        { text: "Baby Foods" },
        { text: "Baby Skincare" },
        { text: "Baby Oral Care" },
        { text: "Newborn Essentials" },
      ],
    },
    {
      text: "Home & Kitchen",
      submenu: [
        { text: "Kitchen Accessories" },
        { text: "Kitchen Appliances" },
        { text: "Tools & Hardware" },
        { text: "Lights & Electrical" },
        { text: "Floor & Glass Cleaners" },
        { text: "Air Freshners" },
      ],
    },
  ];

  return (
    <div className="h-28 w-full flex justify-between items-start px-4">
      <div className="relative" ref={categoryRef}>
        {/* Category button that toggles the visibility of the dropdown */}
        <div onClick={toggleCategory}>
          <div className={navbar.category_button}>
            <FontAwesomeIcon icon={faList} className="pr-4 text-white pl-2" />
            <h5 className="font-semibold text-white hover:cursor-pointer">
              Browse Category{" "}
              <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
            </h5>
          </div>
        </div>

        {/* Main category dropdown */}
        {OpenIndex !== null && (
          <div className="absolute left-0 mt-0 w-52 bg-white border rounded-lg shadow-lg z-10">
            <ul className="py-1">
              {category.map((item, index) => (
                <li
                  key={index}
                  className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                  onMouseEnter={() => item.submenu && SetSubOpenIndex(index)} // Show submenu when mouse enters
                  onMouseLeave={() => SetSubOpenIndex(null)} // Hide submenu when mouse leaves
                >
                  {item.text}
                  {/* If the item has a submenu, show a dropdown icon */}
                  {item.submenu && (
                    <>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="ml-2 text-xs float-right"
                      />
                      {/* Submenu dropdown */}
                      {SubOpenIndex === index && (
                        <ul className="absolute left-full top-0 bg-white border shadow-lg w-60 z-20 rounded-lg">
                          {item.submenu.map((sub, subindex) => (
                            <li
                              key={subindex}
                              className="relative px-4 py-2 hover:bg-gray-100 rounded-lg"
                              onMouseEnter={() =>
                                sub.submenu && SetSubSubOpenIndex(subindex)
                              } // Show third-level submenu
                              onMouseLeave={() => SetSubSubOpenIndex(null)} // Hide third-level submenu
                            >
                              {sub.text}
                              {/* If this submenu has a third-level submenu, show a dropdown icon */}
                              {sub.submenu && (
                                <>
                                  <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="ml-2 text-xs float-right"
                                  />
                                  {/* Third-level submenu dropdown */}
                                  {SubSubOpenIndex === subindex && (
                                    <ul className="absolute left-full top-0 bg-white border shadow-lg w-60 z-30 rounded-lg">
                                      {sub.submenu.map((sub2, sub2index) => (
                                        <li
                                          key={sub2index}
                                          className="px-4 py-2 hover:bg-gray-100"
                                        >
                                          {sub2.text}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Navbar links */}
      <div className="flex items-center mt-12 gap-10 mr-[400px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${navbar.home_link} text-green-500` : navbar.home_link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/offers"
          className={({ isActive }) =>
            isActive ? `${navbar.offer_link} text-green-500` : navbar.offer_link
          }
        >
          Offers
        </NavLink>
        <NavLink
          to="/daily-deals"
          className={({ isActive }) =>
            isActive
              ? `${navbar.daily_deals} text-green-500`
              : navbar.daily_deals
          }
        >
          Daily Deals
        </NavLink>
        <NavLink
          to="/flash-sale"
          className={({ isActive }) =>
            isActive ? `${navbar.flash_sale} text-green-500` : navbar.flash_sale
          }
        >
          Flash Sale
        </NavLink>
      </div>

      {/* Contact and cart section */}
      <div className="flex items-center justify-center mt-9 gap-8">
        <div className="flex items-center mr-5">
          {/* Customer service phone number */}
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-[#7FBEF1] pr-3 h-[16px] w-[24px]"
          />
          <p className="text-[#7FBEF1] text-sm font-bold">+8801333384628</p>
        </div>

        {/* Shopping cart button */}
        <button className={navbar.cart_button}>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faBagShopping} className=" text-white" />
            <p className={navbar.cart_label}>My Cart</p>
            <p className={navbar.cart_label}>(0)</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
