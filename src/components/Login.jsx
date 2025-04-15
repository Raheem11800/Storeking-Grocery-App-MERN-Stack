import React, { useState } from "react";
import image from "../assets/CardsImages/auth.png";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); // Hook for navigation
    const [usePhoneno, setPhoneno] = useState(false); // Toggle for using phone or email
  
    return (
      <>
        {/* Top bar components */}
        <Header />
        <Navbar />
  
        {/* Login container - center aligned */}
        <div className="min-h-screen flex justify-center items-center bg-white pt-[0px] pb-10">
          {/* Box holding image + form */}
          <div className="w-[770px] h-[685px] grid grid-cols-2 shadow-lg rounded-2xl overflow-hidden">
            
            {/* Left section - Image */}
            <div className="flex justify-center items-center bg-gray-100">
              <img
                src={image}
                alt="Login Visual"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Right section - Form */}
            <div className="flex flex-col px-8 py-4">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-green-600 mb-2 flex justify-center">
                Sign In
              </h2>
              <p className="text-sm text-gray-600 mb-6 flex justify-center font-medium">
                Sign in to continue shopping
              </p>
  
              {/* Email/Phone toggle + input */}
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-normal mb-1 mt-2">
                    {usePhoneno ? "Phone no *" : "Email *"}
                  </label>
  
                  {/* Toggle between email and phone */}
                  <span
                    onClick={() => setPhoneno(!usePhoneno)}
                    className="text-green-600 text-xs font-medium hover:underline cursor-pointer"
                  >
                    {usePhoneno ? "Use Email Instead" : "Use Phone Instead"}
                  </span>
                </div>
  
                {/* Phone input */}
                {usePhoneno ? (
                  <div className="flex items-center border border-gray-300 rounded p-2 text-xs focus-within:border-blue-500">
                    <img
                      src="https://flagcdn.com/w40/bd.png"
                      alt="Flag"
                      className="w-5 h-4 mr-2"
                    />
                    <span className="mr-2">+880</span>
                    <input type="tel" className="w-full outline-none" />
                  </div>
                ) : (
                  // Email input
                  <input
                    type="email"
                    className="p-2 border border-gray-300 rounded w-full text-xs focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>
  
              {/* Password input */}
              <label className="text-xs font-normal mb-1 mt-2">Password *</label>
              <input
                type="password"
                className="p-2 mb-4 border border-gray-300 rounded w-full text-xs focus:outline-none focus:border-blue-500"
              />
  
              {/* Remember me + forgot password */}
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
  
              {/* Sign In button */}
              <button className="mt-3 bg-green-500 text-white font-semibold py-2 rounded-full hover:bg-green-600 transition">
                Sign In
              </button>
  
              {/* Redirect to signup if user doesn’t have account */}
              <p className="text-sm text-[#6E7191] mt-4 ml-12">
                Don’t have an account?{" "}
                <a
                  className="text-green-600 font-medium hover:underline hover:cursor-pointer"
                  onClick={() => navigate("/Signup")}
                >
                  Sign Up
                </a>
              </p>
  
              {/* Quick demo login text */}
              <p className="text-md font-medium mt-5 ml-8">
                For quick demo login click below
              </p>
  
              {/* Role-based demo buttons */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <button className="bg-[#F97316] h-10 w-40 rounded-lg text-white text-xs">
                  Admin
                </button>
                <button className="bg-[#10B981] h-10 w-40 rounded-lg text-white text-xs">
                  Customer
                </button>
                <button className="bg-[#0284C7] h-10 w-40 rounded-lg text-white text-xs">
                  Manager
                </button>
                <button className="bg-[#A855F7] h-10 w-40 rounded-lg text-white text-xs">
                  POS Operator
                </button>
                <button className="bg-[#A855F7] h-10 w-40 rounded-lg text-white text-xs">
                  Delivery Boy
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom footer */}
        <Footer />
      </>
    );
  }
  
  export default Login;
  
