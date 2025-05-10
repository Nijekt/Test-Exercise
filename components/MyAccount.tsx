"use client";
import React from "react";
import Table from "./Table";
import { Button } from "./Button";
import Input from "./Input";
import { useRouter } from "next/navigation";
import data from "@/mockData/mockAccounts.json";
// const data = [
//   {
//     account_name_type: {
//       name: "NAMEX Tech Solutions",
//       type: "Large Enterprise",
//     },
//     line: "D&O Liability",
//     broker: "Willis Towers",
//     renewal_date: "04/16/2025",
//     premium: "$2.3M",
//     rated_premium: "$2.8M",
//     loss_ratio: "32%",
//     appetite: "HIGH",
//     status: "Active",
//     triage: 180,
//     winnability: "Very Strong",
//   },
//   {
//     account_name_type: {
//       name: "Alliance Healthcare Systems",
//       type: "Mid-Market",
//     },
//     line: "Medical Malpractice",
//     broker: "Aon Risk",
//     renewal_date: "06/30/2025",
//     premium: "$1.7M",
//     rated_premium: "$1.9M",
//     loss_ratio: "38%",
//     appetite: "MEDIUM",
//     status: "Under review",
//     triage: 165,
//     winnability: "Strong",
//   },
//   {
//     account_name_type: {
//       name: "Maritime Logistics Corp",
//       type: "Shipping/Logistics",
//     },
//     line: "Marine Cargo",
//     broker: "Marsh McLennan",
//     renewal_date: "09/05/2025",
//     premium: "$875K",
//     rated_premium: "$920K",
//     loss_ratio: "25%",
//     appetite: "HIGH",
//     status: "Active",
//     triage: 182,
//     winnability: "Very Strong",
//   },
//   {
//     account_name_type: { name: "GreenField Energy Ltd", type: "Energy Sector" },
//     line: "Environmental Liability",
//     broker: "Aon Risk",
//     renewal_date: "07/22/2025",
//     premium: "$1.2M",
//     rated_premium: "$1.4M",
//     loss_ratio: "67%",
//     appetite: "CAUTIOUS",
//     status: "Under review",
//     triage: 158,
//     winnability: "Medium",
//   },
// ];
const MyAccount = () => {
  const router = useRouter();
  const handleRowClick = (item: any, index: number) => {
    router.push(`/accounts/${index}`);
  };
  return (
    <div className="flex flex-col bg-secondary w-full  my-[42px] px-[25px] py-[24px] rounded-[20px]">
      <div className="flex items-center mb-[24px] flex-wrap">
        <h3 className="">My Accounts </h3>
        <Input
          placeholder="Search"
          className="bg-[#252a3d] ml-[28px] mr-[14.5px] rounded-full w-[250px] py-1 px-3"
        />
        <div className="flex gap-3 flex-wrap">
          <Button variant="outline" className="px-5 py-1 rounded-full">
            Filter
          </Button>
          <Button variant="outline" className="px-5 py-1 rounded-full">
            Sort
          </Button>
          <Button variant="outline" className="px-5 py-1 rounded-full">
            Group
          </Button>
          <Button variant="default" className="px-5 py-1 rounded-full">
            +New
          </Button>
        </div>
      </div>
      <Table data={data} onRowClick={handleRowClick} />
    </div>
  );
};

export default MyAccount;
