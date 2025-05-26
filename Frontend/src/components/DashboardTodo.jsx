import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiTodoLine } from "react-icons/ri";
import { tasks } from "../assets/assets";

const DashboardTodo = () => {
  return (
    <div>
      <div className="border border-gray-200 rounded-xl shadow-sm p-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <RiTodoLine className="text-2xl text-[#FF6767]" />
              <span className="text-[#FF6767]">To-Do</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              <span>20 June</span>
              <span className="mx-2">·</span>
              <span>Today</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#FF6767] text-white text-sm rounded-md hover:bg-[#e75b5b] transition-all duration-200">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="mt-4 space-y-4">
          {/* Render first 3 tasks from the tasks array */}
          {tasks.slice(0, 3).map((task) => (
            <div
              key={task.id}
              className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-sm relative bg-gray-50 hover:bg-gray-100 transition-all"
            >
              <span className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-600">
                <HiOutlineDotsHorizontal />
              </span>

              {/* Task Info */}
              <div className="flex-1">
                <h2 className="font-medium text-gray-800 text-base mb-1">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {task.description.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <p>
                    <strong>Priority:</strong> {task.Priority}
                  </p>
                  <p>
                    <strong>Status:</strong> {task.status}
                  </p>
                </div>
              </div>

              {/* Task Image */}
              <div className="w-full sm:w-24 flex flex-col items-center">
                <img
                  src={task.image}
                  alt={task.title}
                  className="rounded-md object-cover w-full h-20 mt-2"
                />
                <p className="text-[10px] text-center text-gray-500 mt-2">
                  Created on: {task.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTodo;
