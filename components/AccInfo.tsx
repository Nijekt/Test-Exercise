import React, { FC } from "react";
import Image from "next/image";
import logo from "../app/assets/accountsLogos/Logo1.png";
import { AccountType } from "@/types/types";

type Props = {
  className?: string;
  account: AccountType;
};

const AccInfo: FC<Props> = ({ account, className }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
      <Image
        src={logo}
        alt="Account Logo"
        width={80}
        height={80}
        className="rounded-full mb-2 sm:mb-0"
      />
      <div>
        <h2 className="text-2xl md:text-[36px]">
          {account.account_name_type.name}
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base mt-2 flex-wrap">
          <div className="sm:border-r border-gray-300 pr-3">
            425 Harbor Boulevard, Suite 300
            <br /> Seattle, WA 98104
          </div>
          <div className="sm:border-r border-gray-300 sm:px-3">
            <h5 className="font-semibold">EXISTING ACCOUNT</h5>
            <span>54383</span>
          </div>
          <div className="sm:border-r border-gray-300 sm:px-3">
            <h5 className="font-semibold">BROKER</h5>
            <span>Marsh McLennan</span>
          </div>
          <div className="sm:px-3">
            <h5 className="font-semibold">UNDERWRITER</h5>
            <span>Kate Johnson</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccInfo;
