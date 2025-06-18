import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";

const DashboardPage = () => {
  return (
    <>
      {/* Top Navigation Header */}
      <DashboardHeader />

      {/* Page Layout: Sidebar + Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar: Visible on medium screens and above */}
        <aside className="hidden md:block">
          <SideBar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 mt-10">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
