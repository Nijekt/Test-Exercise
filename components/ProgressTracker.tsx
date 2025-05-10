import React from "react";

const stages = [
  { name: "Submitted", completed: true },
  { name: "Review", completed: true },
  { name: "Quote", completed: true },
  { name: "Bind", completed: true },
  { name: "Issue", completed: true },
  { name: "Renew", completed: false },
];

const ProgressTracker: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {stages.map((stage, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              stage.completed ? "bg-green-500" : "border-2 border-gray-400"
            }`}
          >
            {stage.completed ? (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            )}
          </div>
          {index < stages.length - 1 && (
            <div className="w-8 h-px bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
