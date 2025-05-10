import React from "react";
import { LuCheck } from "react-icons/lu";

const ComplianceDoc = () => {
  return (
    <div className="flex flex-wrap gap-x-20 justify-center lg:justify-normal  w-full h-[159px] bg-secondary p-[24px] mt-4 rounded-[20px]">
      <div className="flex w-[220px] items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
          <LuCheck className="w-3 h-3 text-[#3BB979]" />
        </div>
        <p className="text-[18px]">KYC verification</p>
      </div>
      <div className="flex w-[220px] items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
          <LuCheck className="w-3 h-3 text-[#3BB979]" />
        </div>
        <p className="text-[18px]">Required Documentation</p>
      </div>
      <div className="flex w-[220px] items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
          <LuCheck className="w-3 h-3 text-[#3BB979]" />
        </div>
        <p className="text-[18px]">Regulatory approval</p>
      </div>
      <div className="flex w-[220px] items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
          <LuCheck className="w-3 h-3 text-[#3BB979]" />
        </div>
        <p className="text-[18px]">Financial Verification</p>
      </div>
    </div>
  );
};

export default ComplianceDoc;
