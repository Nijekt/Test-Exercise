import React from "react";

const MartialIntelligence = () => {
  return (
    <div className="bg-secondary p-5 rounded-[20px] h-[50%]">
      <h3>Market Intelligence</h3>
      <div className="flex flex-col gap-1 mt-3">
        <div className="flex border-b-[0.5px] border-b-[#293245]">
          <div className="w-4 h-4 rounded-full bg-[#B93B3B] mr-[10px]"></div>
          <span className="text-[19px]">
            Rate hardening in Cyber market -+ 15% YoY
          </span>
        </div>
        <div className="flex border-b-[0.5px] border-b-[#293245]">
          <div className="w-4 h-4 rounded-full bg-[#FDD261] mr-[10px]"></div>
          <span className="text-[19px]">
            New capacity entering Marine market
          </span>
        </div>
        <div className="flex  border-b-[0.5px] border-b-[#293245]">
          <div className="w-4 h-4 rounded-full bg-[#1E40AF] mr-[10px]"></div>
          <span className="text-[19px]">
            Enviromental regulatory changes in the CA
          </span>
        </div>
      </div>
    </div>
  );
};

export default MartialIntelligence;
