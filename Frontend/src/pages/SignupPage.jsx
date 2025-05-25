import React from "react";
import { assets } from "../assets/assets";
import { FaUserPen } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <section className="bg-[url(./from_bg.png)] bg-no-repeat bg-center bg-cover bg-fixed bg-[#FF9090] min-h-screen p-8  md:p-16">
      <form className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-15 w-full md:items-center p-6 md:p-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.singup_image}
            alt="Sign up illustration"
            className="w-full md:w-[400px] h-full 
 max-w-md object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Sign Up
          </h2>
          <div className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <FaUserPen className="text-gray-500 mr-3 text-lg" />
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <FaUserPen className="text-gray-500 mr-3 text-lg" />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <LuUserRound className="text-gray-500 mr-3 text-lg" />
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <MdEmail className="text-gray-500 mr-3 text-lg" />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <FaLock className="text-gray-500 mr-3 text-lg" />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <FiLock className="text-gray-500 mr-3 text-lg" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4 accent-[#FF9090]"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree to all terms
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#FF9090] hover:bg-[#e57d7d] text-white py-3 px-6 rounded-lg w-full transition-colors duration-300 font-medium"
            >
              Register
            </button>
          </div>
          <span className="text-gray-600 mt-5 text-sm text-center block">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[#FF9090] font-medium hover:underline"
            >
              Sign In
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default SignupPage;
