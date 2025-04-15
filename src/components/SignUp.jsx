import React, { useState } from "react";
import image from "../assets/CardsImages/auth.png";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate(); // Hook to navigate to other routes programmatically
    const [usePhoneno, setPhoneno] = useState(false); // Toggle between using phone number or email
  
    return (
      <>
        {/* Top header and navigation bar */}
        <Header />
        <Navbar />
  
        {/* Main container to center the signup form vertically and horizontally */}
        <div className="min-h-screen flex justify-center items-center bg-white pt-[0px] pb-10">
          {/* Signup box with 2 columns (image on left, form on right) */}
          <div className="w-[770px] h-[685px] grid grid-cols-2 shadow-lg rounded-2xl overflow-hidden">
            
            {/* Left side image section */}
            <div className="flex justify-center items-center bg-gray-100">
              <img
                src={image}
                alt="Login Visual"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Right side - Signup form section */}
            <div className="flex flex-col px-8 py-4">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-green-600 mb-2 flex justify-center">
                Sign Up
              </h2>
  
              {/* Name input field */}
              <label className="text-xs font-normal mb-1 mt-2">Name *</label>
              <input
                type="text"
                className="p-2 mb-4 border border-gray-300 rounded w-full text-xs focus:outline-none focus:border-blue-500"
              />
  
              {/* Email or Phone toggle */}
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  {/* Label changes based on state */}
                  <label className="text-xs font-normal mb-1 mt-2">
                    {usePhoneno ? "Phone no *" : "Email *"}
                  </label>
  
                  {/* Toggle option to switch between email and phone */}
                  <span
                    onClick={() => setPhoneno(!usePhoneno)}
                    className="text-green-600 text-xs font-medium hover:underline cursor-pointer"
                  >
                    {usePhoneno ? "Use Email Instead" : "Use Phone Instead"}
                  </span>
                </div>
  
                {/* Conditional rendering for phone or email input */}
                {usePhoneno ? (
                  <div className="flex items-center border border-gray-300 rounded p-2 text-xs focus-within:border-blue-500">
                    {/* Country flag image */}
                    <img
                      src="https://flagcdn.com/w40/bd.png"
                      alt="Flag"
                      className="w-5 h-4 mr-2"
                    />
                    {/* Country code */}
                    <span className="mr-2">+880</span>
                    {/* Phone input field */}
                    <input type="tel" className="w-full outline-none" />
                  </div>
                ) : (
                  // Email input field
                  <input
                    type="email"
                    className="p-2 border border-gray-300 rounded w-full text-xs focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>
  
              {/* Password input field */}
              <label className="text-xs font-normal mb-1 mt-2">Password *</label>
              <input
                type="password"
                className="p-2 mb-4 border border-gray-300 rounded w-full text-xs focus:outline-none focus:border-blue-500"
              />
  
              {/* Remember me and Forgot password section */}
              <div className="flex justify-between items-center mb-4 text-sm mt-2">
                <label className="flex items-center gap-2 text-xs">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a
                  href="#"
                  className="text-green-600 hover:underline text-xs font-medium"
                >
                  Forgot Password
                </a>
              </div>
  
              {/* Submit button */}
              <button className="mt-3 bg-green-500 text-white font-semibold py-2 rounded-full hover:bg-green-600 transition">
                Sign In
              </button>
  
              {/* Redirect to login if already have account */}
              <p className="text-sm text-[#6E7191] mt-4 ml-12">
                Already have an account?{" "}
                <a
                  className="text-green-600 font-medium hover:underline hover:cursor-pointer"
                  onClick={() => navigate("/Login")}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
  
        {/* Footer at the bottom */}
        <Footer />
      </>
    );
  }
  
  export default SignUp;
  
