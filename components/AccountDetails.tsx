import { LuCircleArrowDown, LuCircleArrowUp, LuRocket } from "react-icons/lu";
import { Button } from "./Button";
import PhotoProgressBar from "./ProgressBar";
import CustomLineChart from "./CustomLineChart";

import React, { FC } from "react";
import { AccountType } from "@/types/types";

type Props = {
  account: AccountType;
  className?: string;
};

const MyComponent: FC<Props> = ({ account }) => {
  return (
    <div className="w-full bg-secondary mt-4 flex flex-col 2xl:flex-row py-[30px] gap-4 rounded-[20px]">
      {/* Left Sidebar */}
      <div className="flex flex-col w-full 2xl:max-w-[391px] border-r-0 2xl:border-r border-r-foreground border-dashed px-[22.5px] gap-3">
        <div className="w-full bg-third h-auto px-[24px] py-[10px] rounded-[20px]">
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <h3>DESICION SUPPORT</h3>
              <span className="flex items-center justify-center border border-foreground rounded-[8px] h-8 w-7">
                <h3>4</h3>
              </span>
            </div>
            <div className="ml-[28px] mt-[32px]">
              <ul className="flex flex-col gap-[24px] text-[18px]">
                <li className="hover:text-primary cursor-pointer">
                  Winnability
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Exposure Review $ Suggested Coverage
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Portfolio Strategy Alignment
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Brokre Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-transparent px-[24px] py-[10px] rounded-[20px] hover:bg-third cursor-pointer group">
          <div className="flex items-center justify-between w-full">
            <h3>RISC ASSESMENT</h3>
            <span className="flex items-center justify-center bg-third group-hover:border-foreground group-hover:border rounded-[8px] h-8 w-7">
              <h3>6</h3>
            </span>
          </div>
        </div>
        <div className="w-full bg-transparent px-[24px] py-[10px] rounded-[20px] hover:bg-third cursor-pointer group">
          <div className="flex items-center justify-between w-full">
            <h3>DOCUMENTS AND COMPLIANCE</h3>
            <span className="flex items-center justify-center bg-third group-hover:border-foreground group-hover:border rounded-[8px] h-8 w-7">
              <h3>2</h3>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-y-6 px-[15px] lg:px-[30px]">
        <h2 className="text-[32px] md:text-[40px] lg:text-[52px]">
          Winnability
        </h2>

        {/* Cards Row */}
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div className="w-full md:w-[48%] lg:w-[359px] bg-third rounded-[20px] p-[24px]">
            <h3>Overall Score</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <h2 className="text-[36px] lg:text-[52px]">82%</h2>
              <span className="flex w-fit items-center bg-transparent px-3 py-2 text-xs border border-blue-500 text-blue-500 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-[18px] ml-1">{account.winnability}</span>
              </span>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[352px] bg-third rounded-[20px]">
            <div className="w-full h-auto p-[24px]">
              <h3>Historical trend</h3>
              <CustomLineChart />
            </div>
          </div>

          <div className="w-full lg:w-[455px] bg-third rounded-[20px] p-[24px]">
            <h3>Position</h3>
            <div className="w-full max-w-[390px]">
              <PhotoProgressBar
                progress={82}
                goalAmount={`Your Score 82%`}
                fillColor="bg-gradient-to-r from-[#313853] to-[#3B82F6]"
                backgroundColor="bg-gray-700"
                height="h-5"
                textColor="text-white"
                showProgress={false}
                containerClass="mt-1/2"
                lineWidth="w-full"
              />
              <PhotoProgressBar
                progress={68}
                goalAmount={`Market Avg 68%`}
                fillColor="bg-gradient-to-r from-[#313853] to-[#3B82F6]"
                backgroundColor="bg-gray-700"
                height="h-5"
                textColor="text-white"
                showProgress={false}
                containerClass="mt-1/2"
                lineWidth="w-full"
              />
              <PhotoProgressBar
                progress={88}
                goalAmount={`Top Competitor 88%`}
                fillColor="bg-gradient-to-r from-[#313853] to-[#3B82F6]"
                backgroundColor="bg-gray-700"
                height="h-5"
                textColor="text-white"
                showProgress={false}
                containerClass="mt-1/2"
                lineWidth="w-full"
              />
            </div>
          </div>
        </div>

        {/* Increasing / Decreasing Winnability */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Increasing Winnability */}
          <div className="flex flex-col w-full lg:w-1/2 bg-third rounded-[20px] p-[24px]">
            <div className="flex items-center gap-2 mb-4">
              <LuCircleArrowUp size={27} color="#3BB979" />
              <h3>Increasing Winnability</h3>
            </div>
            <div className="space-y-[25px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#3BB979] justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#3BB979] border-1 font-bold">
                  1
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+28%"}
                    fillColor="bg-gradient-to-r from-[#3bb97a33] to-[#3BB979]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[274px]"
                    header="Broker realationship"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#3BB979] justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#3BB979] border-1 font-bold">
                  2
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+22%"}
                    fillColor="bg-gradient-to-r from-[#3bb97a33] to-[#3BB979]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[225px]"
                    header="Loss history"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#3BB979] justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#3BB979] border-1 font-bold">
                  3
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+16%"}
                    fillColor="bg-gradient-to-r from-[#3bb97a33] to-[#3BB979]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[182px]"
                    header="Indsutry growth"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#3BB979] justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#3BB979] border-1 font-bold">
                  4
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+11%"}
                    fillColor="bg-gradient-to-r from-[#3bb97a33] to-[#3BB979]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[128px]"
                    header="Multiline opportunity"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decreasing Winnability */}
          <div className="flex flex-col w-full lg:w-1/2 bg-third rounded-[20px] p-[24px]">
            <div className="flex items-center gap-2 mb-4">
              <LuCircleArrowDown size={27} color="#FDD261" />
              <h3>Decreasing Winnability</h3>
            </div>
            <div className="space-y-[25px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#FDD261] border-1 text-[#FDD261] font-bold">
                  1
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+28%"}
                    fillColor="bg-gradient-to-r from-[#fdd1612a] to-[#FDD261]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[274px]"
                    header="Premium pricing"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#FDD261] border-1 text-[#FDD261] font-bold">
                  2
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+22%"}
                    fillColor="bg-gradient-to-r from-[#fdd1612a] to-[#FDD261]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[225px]"
                    header="Total exposure"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#FDD261] border-1 text-[#FDD261] font-bold">
                  3
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+16%"}
                    fillColor="bg-gradient-to-r from-[#fdd1612a] to-[#FDD261]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[182px]"
                    header="Loss ratio trend"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[43px] h-[43px] rounded-full bg-transparent border-[#FDD261] border-1 text-[#FDD261] font-bold">
                  4
                </div>
                <div className="overflow-x-auto scrollbar-thin max-w-full">
                  <PhotoProgressBar
                    progress={100}
                    goalAmount={"+11%"}
                    fillColor="bg-gradient-to-r from-[#fdd1612a] to-[#FDD261]"
                    height="h-5"
                    textColor="text-white"
                    showProgress={false}
                    containerClass="mt-1/2"
                    lineWidth="w-[128px]"
                    header="Market competition"
                    headerStyle="text-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-third rounded-[20px] p-[24px]">
          <h3 className="text-[#3BB979] font-semibold flex items-center gap-2 mb-[30px]">
            <LuRocket size={27} color="#3BB979" /> AI-Powered Recommendations
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-[18px] mb-[20px]">
            <div className="flex flex-col max-w-full lg:max-w-[836px]">
              <h6 className="text-[18px] font-semibold">
                Offer 5% premium discount in exchange for 3-year commitment
              </h6>
              <p>
                Historical win rate increases 24% with multi-year commitments.
                Current pricing is 12% above market average. This approach would
                strengthen retention while maintaining adequate profitability.
              </p>
            </div>
            <Button
              variant="empty"
              className="bg-[#3BB979] text-background w-full sm:w-[177px] h-[58px] rounded-full text-[18px]"
            >
              Apply
            </Button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-[18px]">
            <div className="flex flex-col max-w-full lg:max-w-[836px]">
              <h6 className="text-[18px] font-semibold">
                Propose risk control services for cargo handling procedures
              </h6>
              <p>
                Can potentially reduce loss ratio by 15–20% based on similar
                maritime accounts in your portfolio. Specific focus on
                loading/unloading operations would address the most frequent
                claim scenarios.
              </p>
            </div>
            <Button
              variant="empty"
              className="bg-[#3BB979] text-background w-full sm:w-[177px] h-[58px] rounded-full text-[18px]"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
