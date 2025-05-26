import React from "react";
import { BiTask } from "react-icons/bi";

const TaskProgressbar = () => {
  const ProgressCircle = ({ percentage, label }) => {
    const radius = 45;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;

    // Calculates the stroke offset based on the percentage to visually represent progress
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center space-y-2">
        {/* Circular SVG progress indicator */}
        <div className="relative w-24 h-24">
          {" "}
          {/* Adjusted to ensure it's a perfect square */}
          <svg
            height="100"
            width="100"
            className="transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx="50"
              cy="50"
            />
            <circle
              stroke="#FF6767"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx="50"
              cy="50"
            />
          </svg>
          {/* Centered percentage label */}
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
            {percentage}%
          </div>
        </div>

        {/* Label below the circle */}
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    );
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm p-4 bg-white flex flex-col">
      {/* Section Header */}
      <div className="flex items-center gap-1 font-semibold mb-5 text-[#FF6767]">
        <BiTask className="text-2xl" />
        Task Progress
      </div>

      {/* Responsive layout of progress circles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
        <ProgressCircle percentage={33} label="Complete" />
        <ProgressCircle percentage={50} label="In Progress" />
        <ProgressCircle percentage={17} label="Not Started" />
      </div>
    </div>
  );
};

export default TaskProgressbar;
