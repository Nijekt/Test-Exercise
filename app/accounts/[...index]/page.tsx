import React from "react";
import data from "@/mockData/mockAccounts.json";
import { LuCircleAlert } from "react-icons/lu";
import AccountDetails from "@/components/AccountDetails";
import Table from "@/components/Table";
import policiesData from "@/mockData/mockPolicies.json";
import Policies from "@/components/Policies";
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import PhotoProgressBar from "@/components/ProgressBar";
import Communication from "@/components/Communication";
import AccountStatus from "@/components/AccountStatus";
import ComplianceDoc from "@/components/ComplianceDoc";
import AccInfo from "@/components/AccInfo";
import LinkArrow from "@/components/LinkArrow";

type Params = Promise<{ index: string }>;

const Accounts = async ({ params }: { params: Params }) => {
  const { index } = await params;
  const indexNum = parseInt(index, 10);
  const account = data[indexNum];

  if (!account) {
    return <div>Account not found</div>;
  }
  return (
    <main className="flex flex-col gap-6 w-full">
      {/* BreadCrumbs */}
      <div>
        Dashboard // Accounts //{" "}
        <span className="text-primary">{account.account_name_type.name}</span>
      </div>
      {/* BasicAccInfo */}
      <div className="flex flex-col xl:flex-row justify-between gap-6 w-full px-4 py-6  ">
        {/* Account Info */}
        <AccInfo account={account} />

        {/* Needs Attention */}
        <div className="w-full xl:w-[710px] min-sm:pb-[10px] sm:h-[149px] bg-secondary rounded-[20px] p-4 border border-[#FDD261] ">
          <h3 className="flex items-center text-center gap-2 text-[#FDD261]">
            <LuCircleAlert size={20} /> Needs Attention
          </h3>
          <div className="flex justify-between mt-3">
            <div>
              <div>Marine Survey Required</div>
              <div>Scheduled for 06/12/2025</div>
              <a href="#" className="link-style group">
                Review details link <LinkArrow />
              </a>
            </div>
            <div>
              <div>Marine Survey Required</div>
              <div>Scheduled for 06/12/2025</div>
              <a href="#" className="link-style group">
                Review details link <LinkArrow />
              </a>
            </div>
            <div>
              <div>Marine Survey Required</div>
              <div>Scheduled for 06/12/2025</div>
              <a href="#" className="link-style group">
                Review details link <LinkArrow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Perfomance Metric */}
      <div className="w-full  py-6">
        <h2 className="text-2xl md:text-3xl mb-6">Performance Metrics</h2>
        <div className="flex max-2xl:flex-wrap gap-4">
          {/* Winnability */}
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[377px] h-[239px] bg-secondary rounded-[20px] py-[32px] px-[25px] relative">
            <h3>Winnability</h3>
            <span className="text-[36px] md:text-[52px]">
              {account.winnability}
            </span>
            <a href="#" className="absolute bottom-5 group  link-style">
              See all factors
              <LinkArrow />
            </a>
          </div>

          {/* Loss Ratio */}
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[377px] h-[239px] bg-secondary rounded-[20px] py-[32px] px-[25px] relative">
            <h3>Loss Ratio</h3>
            <span className="text-[36px] md:text-[52px]">
              {account.loss_ratio}{" "}
              <span className="text-xl md:text-2xl">vs 42% target</span>
            </span>
            <a href="#" className="absolute bottom-5 group link-style">
              View history <LinkArrow />
            </a>
          </div>

          {/* Premium Growth */}
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[377px] h-[239px] bg-secondary rounded-[20px] py-[32px] px-[25px] relative">
            <h3>Premium Growth</h3>
            <div className="text-[36px] md:text-[52px]">
              12.4% <span className="text-xl md:text-2xl"> YoY increase</span>
              <p className="text-xl md:text-2xl">$123M vs $150M Target</p>
            </div>
            <a href="#" className="absolute bottom-5 group link-style ">
              View trend <LinkArrow />
            </a>
          </div>

          {/* Exposure Distribution */}
          <div className="flex flex-col gap-4 w-full lg:w-[471px] bg-secondary rounded-[20px] py-[32px] px-[25px]">
            <h3>Exposure distribution</h3>
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
          </div>
        </div>
      </div>

      {/* Policies */}
      <div>
        <h2>Policies</h2>
        <Policies policiesData={policiesData} />
      </div>

      {/* Acc Status & Compilance Documentation */}
      <div>
        <div className="flex lg:flex-row flex-col gap-4 mt-4 rounded-[20px]">
          <div className="flex lg:w-[60%] flex-col gap-2">
            <h2>Account Status</h2>
            <AccountStatus />
          </div>
          {/* Compliance & Documentation */}
          <div className="flex lg:w-[40%] flex-col gap-2 ">
            <h2>Compliance & Documentation</h2>
            <ComplianceDoc />
          </div>
        </div>
      </div>
      {/* Acccount details */}
      <div>
        <h2>Account Details</h2>
        <AccountDetails account={account} />
      </div>
      {/* Communication */}
      <div>
        <h2>Communication</h2>
        <Communication />
      </div>
      {/* Policies */}
      <div>
        <h2>Policies</h2>

        <div className="flex flex-col gap-4 w-full p-[24px] bg-secondary mt-4 rounded-[20px]">
          <div className="flex gap-2 flex-wrap">
            <Input
              placeholder="Search"
              className="bg-[#252a3d] rounded-full w-[250px] py-1 px-3"
            />

            <Button variant="outline" className="px-5 py-1 rounded-full">
              Filter
            </Button>
            <Button variant="outline" className="px-5 py-1 rounded-full">
              Group
            </Button>
          </div>

          <Table data={policiesData} />
        </div>
      </div>
    </main>
  );
};

export default Accounts;
