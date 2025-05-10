import React from "react";
import PhotoProgressBar from "./ProgressBar";

const ExposureDirstribution = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <PhotoProgressBar
        progress={71.4}
        goalAmount={`Marine Cargo ${71.4}%`}
        fillColor="bg-gradient-to-r from-[#313853] to-primary"
        backgroundColor="bg-gray-700"
        height="h-5"
        textColor="text-white"
        showProgress={false}
        containerClass="mt-1/2"
        lineWidth="w-full"
      />
      <PhotoProgressBar
        progress={20}
        goalAmount={`General Liability ${20}%`}
        fillColor="bg-gradient-to-r from-[#313853] to-primary"
        backgroundColor="bg-gray-700"
        height="h-5"
        textColor="text-white"
        showProgress={false}
        containerClass="mt-1/2"
        lineWidth="w-full"
      />
      <PhotoProgressBar
        progress={8.6}
        goalAmount={`Workers Comp ${8.6}%`}
        fillColor="bg-gradient-to-r from-[#313853] to-primary"
        backgroundColor="bg-gray-700"
        height="h-5"
        textColor="text-white"
        showProgress={false}
        containerClass="mt-1/2"
        lineWidth="w-full"
      />
    </div>
  );
};

export default ExposureDirstribution;
