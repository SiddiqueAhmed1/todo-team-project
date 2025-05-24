import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const DashboardHeader = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-GB");
  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <header className="shadow-xs border-b border-gray-100 bg-neutral-50 py-4 px-4 sm:px-6 lg:px-16">
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          <span className="text-[#FF6767]">Dash</span>board
        </h1>

        {/* Search Bar */}
        <div className="w-full sm:max-w-md lg:max-w-lg">
          <div className="flex items-center border border-gray-100 rounded-lg bg-white shadow-xs">
            <input
              type="text"
              placeholder="Search your task here"
              aria-label="Search tasks"
              className="flex-1 outline-none text-sm text-gray-700 bg-transparent pl-3 py-2 text-[17px] placeholder:text-[17px]"
            />
            <span className="h-8 w-8 flex items-center justify-center bg-[#FF6767] text-white rounded m-1.5">
              <CiSearch className="text-xl text-white" />
            </span>
          </div>
        </div>

        {/* Icons and Date */}
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 flex items-center justify-center bg-[#FF6767] text-white rounded">
              <IoMdNotificationsOutline className="text-[22px] text-white cursor-pointer" />
            </span>
            <span className="h-9 w-9 flex items-center justify-center bg-[#FF6767] text-white rounded">
              <SlCalender className="text-[18px] text-white cursor-pointer" />
            </span>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-700 text-sm sm:text-base">
              {weekday}
            </p>
            <span className="text-sm text-blue-500 font-medium">
              {dateString}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
