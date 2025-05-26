import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";
import UserList from "../components/UserList";
import CompleteTask from "../components/CompleteTask";
import DashboardTodo from "../components/DashboardTodo";
import TaskProgressbar from "../components/TaskProgressbar";

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
          {/* User Overview Section */}
          <UserList />

          {/* Dashboard Widgets Container */}
          <div className="bg-white border border-gray-100 shadow mt-10 p-4 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* To-Do List Panel */}
              <DashboardTodo />

              {/* Progress and Completed Tasks Panel */}
              <div>
                <TaskProgressbar />
                <CompleteTask />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
