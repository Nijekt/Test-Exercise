"use client";
import { PolicyType } from "@/types/types";
import React, { FC } from "react";

type Props = {
  className?: string;
  policiesData: PolicyType[];
};

const Policies: FC<Props> = ({ policiesData, className }) => {
  return (
    <div className="flex gap-[17px] w-full h-[174px] bg-secondary mt-4 px-[34px] py-[12px] overflow-x-auto scrollbar-thin rounded-[20px]">
      {policiesData.map((policy, index) => (
        <div
          key={index}
          className="flex flex-shrink-0 flex-col gap-2 bg-third w-fit h-full pl-[25px] py-[30] pr-[200px] rounded-[20px]"
        >
          <div className="flex gap-4 items-center w-full">
            <span
              className="scale-150"
              dangerouslySetInnerHTML={{ __html: policy.line.icon }}
            />
            <h3 className="w-[200px]">{policy.line.name}</h3>
          </div>
          <div className="flex flex-row sm:flex-col gap-2">
            <span>Premium: {policy.renewal_premium}</span>
            <span>Eff.Date: {policy.eff_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policies;
