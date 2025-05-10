import classNames from "classnames";
import React from "react";

type PhotoProgressBarProps = {
  progress?: number; // Процент заполнения прогресс-бара (от 0 до 100)
  achievedAmount?: string; // Достиженная сумма (например, "$8.1M")
  goalAmount?: string; // Целевая сумма (например, "$12M")
  fillColor?: string; // Цвет заполнения прогресс-бара
  backgroundColor?: string; // Цвет фона прогресс-бара
  height?: string; // Высота прогресс-бара
  textColor?: string; // Цвет текста внутри прогресс-бара
  containerClass?: string; // Дополнительный класс для контейнера прогресс-бара
  header?: string; // Текст, отображаемый над прогресс-баром
  headerStyle?: string; // Стиль для текста заголовка
  showProgress?: boolean; // Показывать ли процент заполнения под прогресс-баром
  lineWidth?: string; // Ширина линии прогресс-бара
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
