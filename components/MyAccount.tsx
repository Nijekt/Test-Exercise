"use client";
import React from "react";
import Table from "./Table";
import { Button } from "./Button";
import Input from "./Input";
import { useRouter } from "next/navigation";
import data from "@/mockData/mockAccounts.json";
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
