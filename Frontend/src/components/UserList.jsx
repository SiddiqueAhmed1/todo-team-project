import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { assets } from "../assets/assets";

const UserList = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Welcome back, Sundar 👋
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Here's what’s happening with your dashboard today.
        </p>
      </div>

      {/* Invite section */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Avatars */}
        <div className="flex items-center">
          <img
            src={assets.user_1}
            alt="user_image"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
          <img
            src={assets.user_2}
            alt="user_image"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
          <img
            src={assets.user_3}
            alt="user_image"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
          <img
            src={assets.user_4}
            alt="user_image"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
          <img
            src={assets.user_5}
            alt="user_image"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
        </div>

        {/* Invite Button */}
        <button className="flex items-center gap-2 border border-[#FF6767] text-[#FF6767] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#ff67670d] transition cursor-pointer">
          <AiOutlineUsergroupAdd className="text-lg" />
          Invite
        </button>
      </div>
    </div>
  );
};

export default UserList;
