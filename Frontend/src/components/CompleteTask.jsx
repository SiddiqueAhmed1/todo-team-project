import React from "react";
import { BiTask } from "react-icons/bi";
import { tasks } from "../assets/assets";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const CompleteTask = () => {
  return (
    <div className="mt-4 border border-gray-200 rounded-xl shadow-sm p-4 bg-white flex flex-col">
      <div className="flex items-center gap-2 text-lg font-semibold text-[#FF6767] mb-3">
        <BiTask className="text-2xl" />
        <span>Complete Task</span>
      </div>

      <div className="space-y-4">
        {/* Render the first 2 tasks — intended to show a quick summary of completed tasks */}
        {tasks.slice(0, 2).map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-sm relative bg-gray-50 hover:bg-gray-100 transition-all"
          >
            {/* Action Menu */}
            <span className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-600">
              <HiOutlineDotsHorizontal />
            </span>

            {/* Task Info */}
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-800 mb-1">
                {task.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {task.description.slice(0, 80)}...
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <p>
                  <strong>Priority:</strong> {task.Priority}
                </p>
                <p>
                  <strong>Status:</strong> {task.status}
                </p>
                <p className="text-[11px]">
                  <strong>Created on:</strong> {task.date}
                </p>
              </div>
            </div>

            {/* Task Image */}
            <div className="w-full sm:w-24 flex flex-col items-center justify-start mt-5">
              <img
                src={task.image}
                alt={task.title}
                className="rounded-md object-cover w-full h-20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteTask;
