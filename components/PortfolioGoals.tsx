import React, { FC } from "react";
import PhotoProgressBar from "./ProgressBar";
import MultiSegmentProgressBar from "./MultiProgressBar";

const PortfolioGoals = () => {
  return (
    <div className={"bg-secondary p-5 rounded-[20px] sm:w-[50%] 2xl:w-full"}>
      <h3 className="pb-[29px]">Portfolio Goals</h3>
      <div className="flex flex-col gap-14 ">
        <div className="flex flex-col gap-7">
          <h6 className="text-[#94A3B8]">PORFOLIO LOSS RATION TARGET</h6>
          <MultiSegmentProgressBar
            segments={[
              {
                width: 40,
                color: "bg-[#3BB979]",
                label: "48.2%",
                markerBottom: { label: "-6.8% (GOOD)" },
              },
              {
                width: 20,
                color: "bg-[#FDD261]",
                label: "",
                markerTop: { label: "TG: 53%" },
              },
              {
                width: 40,
                color: "bg-red-500",
                label: "",
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-7">
          <h6 className="text-[#94A3B8]">PORFOLIO LOSS RATION TARGET</h6>
          <MultiSegmentProgressBar
            segments={[
              {
                width: 15,
                color: "bg-red-500",
                label: "",
              },
              {
                width: 35,
                color: "bg-[#FDD261]",
                label: "",
              },
              {
                width: 20,
                color: "bg-[#3BB979]",
                label: "88%",
                markerTop: { label: "TG:85-90%" },
                markerBottom: { label: "ON TARGET" },
              },
              {
                width: 30,
                color: "bg-[#FDD261]",
                label: "",
              },
            ]}
          />
        </div>
        <div>
          <PhotoProgressBar
            progress={67}
            achievedAmount="$8.1M"
            goalAmount="$12M"
            fillColor="bg-gradient-to-r from-[#313853] to-[#3B82F6]"
            backgroundColor="bg-gray-700"
            height="h-6"
            textColor="text-white"
            containerClass="my-4"
            header="NEW BUSINESS TARGET"
            headerStyle="text-[#94A3B8]"
          />
          <PhotoProgressBar
            progress={68}
            achievedAmount="$28.4M"
            goalAmount="$42M"
            fillColor="bg-gradient-to-r from-[#313853] to-[#3B82F6]"
            backgroundColor="bg-gray-700"
            height="h-6"
            textColor="text-white"
            containerClass="my-4"
            header="ANNUAL GWP TARGET"
            headerStyle="text-[#94A3B8]"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGoals;
