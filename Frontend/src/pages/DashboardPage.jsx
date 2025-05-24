import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";

const DashboardPage = () => {
  return (
    <>
      <DashboardHeader />
      <div className="flex gap-8">
        <aside className="hidden md:block">
          <SideBar />
        </aside>
        <div className="flex-1 overflow-y-auto px-4 pr-4 sm:pr-6 lg:pr-16 mt-14">
          Dashboard data
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
