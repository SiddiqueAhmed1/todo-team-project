import { Link } from "react-router-dom";
import { assets, sidebarLinks } from "../assets/assets";
import { IoMdLogOut } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="bg-[#FF6767] text-white h-screen w-64 p-5 md:flex flex-col justify-between mt-14 rounded-tr-xl relative">
      {/* User Profile Centered */}
      <div className="flex flex-col items-center justify-center absolute top-[-7%]">
        <img
          className="w-20 h-20 border-4 border-[#FF6767] rounded-full"
          src={assets.user_image}
          alt="User"
        />
        <h3 className="mt-2 font-semibold text-lg">Sundar Gurung</h3>
        <span className="text-sm text-white/80">sundargurung360@gmail.com</span>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-3 mt-22">
        {sidebarLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.link}
              className="flex items-center gap-3 hover:bg-white hover:text-gray-700 px-3 py-2 rounded transition"
            >
              <span className="text-lg">
                <link.icon />
              </span>
              {link.name}
            </Link>
          </li>
        ))}

        <li>
          <button className="flex items-center gap-3 hover:bg-white/20 px-3 py-2 rounded transition w-full">
            <IoMdLogOut size={20} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
