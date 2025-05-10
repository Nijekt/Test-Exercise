import React from "react";
import Input from "./Input";

const Header = () => {
  return (
    <header className="border-b-2 border-secondary w-full">
      <div className="wrapper flex flex-col gap-4 lg:flex-row justify-between items-start lg:items-center py-6 px-4">
        <h1 className="text-2xl lg:text-4xl font-thin leading-snug">
          Hi Arthur, welcome! You have 12 open tasks.
        </h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          <Input
            placeholder="Search"
            className="w-full sm:w-[300px] lg:w-[480px] h-[48px] text-base bg-secondary px-4 py-2 rounded-full"
          />
          <div className="flex items-center justify-center w-[48px] h-[48px] bg-gradient-to-r from-[#1E40AF] to-[#1e40af4e] rounded-full text-white text-lg font-semibold">
            AR
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
