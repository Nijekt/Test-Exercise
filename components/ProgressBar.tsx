import classNames from "classnames";
import React from "react";

type PhotoProgressBarProps = {
  progress?: number; 
  achievedAmount?: string; 
  goalAmount?: string; 
  fillColor?: string;
  backgroundColor?: string; 
  height?: string; 
  textColor?: string;  
  containerClass?: string; 
  header?: string; 
  headerStyle?: string;  
  showProgress?: boolean; 
  lineWidth?: string; 
};

const PhotoProgressBar: React.FC<PhotoProgressBarProps> = ({
  progress = 0,
  achievedAmount = "",
  goalAmount = "",
  fillColor = "bg-blue-500",
  backgroundColor,
  height = "h-6",
  textColor = "text-white",
  containerClass = "",
  header = "",
  headerStyle,
  showProgress = true,
  lineWidth = "w-full",
}) => {
  return (
    <div className={`w-full ${containerClass}`}>
      {header && (
        <div className={classNames("mb-1 text-sm ", headerStyle)}>{header}</div>
      )}
      <div className="flex items-center">
        <div className="relative flex-grow">
          <div
            className={`${lineWidth} ${backgroundColor} ${height} rounded-r-full overflow-hidden`}
          >
            <div
              className={`${fillColor} ${height} rounded-r-full flex items-center justify-end pr-2 ${textColor} font-semibold`}
              style={{ width: `${progress}%` }}
            >
              {achievedAmount}
            </div>
          </div>
        </div>
        <div className="ml-4 ">
          <span className="text-sm font-semibold ">{goalAmount}</span>
        </div>
      </div>
      {showProgress && (
        <div className="mt-2 text-center text-sm font-medium text-gray-700">
          {progress}%
        </div>
      )}
    </div>
  );
};

export default PhotoProgressBar;
