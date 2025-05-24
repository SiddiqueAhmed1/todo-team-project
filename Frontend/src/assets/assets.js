import { LuLayoutDashboard } from "react-icons/lu";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";

import login_image from "./login_image.png";
import singup_image from "./singup_image.png";
import user_image from "./user_image.png";

export const assets = {
  login_image,
  singup_image,
  user_image,
};

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    id: 2,
    name: "Vital Task",
    link: "/vital-task",
    icon: FaExclamation,
  },
  {
    id: 3,
    name: "My Task",
    link: "/my-task",
    icon: BiTask,
  },
  {
    id: 4,
    name: "Task Categories",
    link: "/my-task",
    icon: BsListTask,
  },
  {
    id: 5,
    name: "Setting",
    link: "/setting",
    icon: IoMdSettings,
  },
  {
    id: 6,
    name: "Help",
    link: "/help",
    icon: IoIosHelpCircle,
  },
];
