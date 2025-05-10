import React from "react";
import { LuCheck } from "react-icons/lu";

const AccountStatus = () => {
  return (
    <div className=" w-full h-[159px] max-sm:h-fit bg-secondary mt-4 p-[24px] rounded-[20px]">
      {/* <ProgressTracker /> */}
      <div className="flex max-sm:flex-col items-center justify-center  h-full gap-1">
        <div className="flex flex-col items-center">
          <div className="h-8 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
              <LuCheck className="w-4 h-4 text-[#3BB979]" />
            </div>
          </div>
          <div className="mt-1 text-[20px]">Submitted</div>
        </div>

        <div className="w-27 h-px border-1 border-[#3BB979] border-dashed max-sm:hidden   relative  top-[-15px]" />

        <div className="flex flex-col items-center">
          <div className="h-8 flex items-center ">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
              <LuCheck className="w-4 h-4 text-[#3BB979]" />
            </div>
          </div>
          <div className="mt-1 text-[20px]">Review</div>
        </div>
        <div className="w-27 h-px border-1 border-[#3BB979] border-dashed max-sm:hidden relative top-[-15px]" />

        <div className="flex flex-col items-center">
          <div className="h-8 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
              <LuCheck className="w-4 h-4 text-[#3BB979]" />
            </div>
          </div>
          <div className="mt-1 text-[20px]">Quote</div>
        </div>
        <div className="w-27 h-px border-1 border-[#3BB979] border-dashed max-sm:hidden relative top-[-15px]" />

        <div className="flex flex-col items-center">
          <div className="h-8 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
              <LuCheck className="w-4 h-4 text-[#3BB979]" />
            </div>
          </div>
          <div className="mt-1 text-[20px]">Bind</div>
        </div>
        <div className="w-27 h-px border-1 border-[#3BB979] border-dashed max-sm:hidden relative top-[-15px]" />

        <div className="flex flex-col items-center">
          <div className="h-8 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#3BB979]">
              <LuCheck className="w-4 h-4 text-[#3BB979]" />
            </div>
          </div>
          <div className="mt-1 text-[20px]">Issue</div>
        </div>
        <div className="w-27 h-px border-1 border-foreground border-dashed max-sm:hidden relative top-[-15px]" />

        <div className="flex flex-col items-center">
          <div className="h-8 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-dashed border-gray-400">
              <LuCheck className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="mt-1 text-[20px]">Renew</div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
