import { LuLayoutDashboard } from "react-icons/lu";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";

import login_image from "./login_image.png";
import singup_image from "./singup_image.png";
import user_image from "./user_image.png";
import user_1 from "./user-1.png";
import user_2 from "./user-2.png";
import user_3 from "./user-3.png";
import user_4 from "./user-4.png";
import user_5 from "./user5.png";
import task_image from "./task-image.png";

export const assets = {
  login_image,
  singup_image,
  user_image,
  user_1,
  user_2,
  user_3,
  user_4,
  user_5,
  task_image,
};

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard/home",
    icon: LuLayoutDashboard,
  },
  {
    id: 2,
    name: "Vital Task",
    link: "/dashboard/vital-task",
    icon: FaExclamation,
  },
  {
    id: 3,
    name: "My Task",
    link: "/dashboard/my-task",
    icon: BiTask,
  },
  {
    id: 4,
    name: "Task Categories",
    link: "/dashboard/task-categories",
    icon: BsListTask,
  },
  {
    id: 5,
    name: "Setting",
    link: "/dashboard/setting",
    icon: IoMdSettings,
  },
  {
    id: 6,
    name: "Help",
    link: "/dashboard/help",
    icon: IoIosHelpCircle,
  },
];

export const tasks = [
  {
    id: 1,
    title: "Attend Nischal’s Birthday Party",
    description: `You’ve been invited to Nischal’s birthday celebration! The party will take place on 
20th June at 7:00 PM at his residence in Greenfield Villa, Hall 3. 
Make sure to arrive on time to enjoy the cake-cutting ceremony, games, and music.
Don’t forget to bring a thoughtful gift 🎁 and wear something festive. It's a great 
opportunity to connect with mutual friends and have a joyful evening.`,
    Priority: "Moderate",
    status: "In Progress",
    date: "20/06/2023",
    image: task_image,
  },
  {
    id: 2,
    title: "Complete Resume Checker UI",
    description: `Design and build the frontend interface for the resume checker module. 
Ensure that users can upload a PDF, preview it, and receive automated feedback. 
Focus on clean UI, mobile responsiveness, and usability.`,
    Priority: "High",
    status: "Not Started",
    date: "25/06/2023",
    image: task_image,
  },
  {
    id: 3,
    title: "Team Meeting: Project Sync",
    description: `Weekly sync-up with the development team to discuss current sprint progress, 
roadblocks, and goals for the upcoming week. Prepare your updates in advance.`,
    Priority: "Low",
    status: "Scheduled",
    date: "22/06/2023",
    image: task_image,
  },
  {
    id: 4,
    title: "Submit Final Report to Client",
    description: `Prepare and submit the final project report to the client, including performance metrics, 
codebase overview, known issues, and deployment notes. Ensure formatting is professional.`,
    Priority: "High",
    status: "In Progress",
    date: "28/06/2023",
    image: task_image,
  },
];
