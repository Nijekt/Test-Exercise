"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import Table from "./Table";

const tasks = [
  {
    originator: { name: "Sam Masters", initials: "SM" },
    clientLine: { client: "NAMEX Tech Solutions", line: "Cybersecurity" },
    type: "Underwriter Referral",
    status: "New",
    created: "04/16/2025",
  },
  {
    originator: { name: "Annalise Willis", initials: "AW" },
    clientLine: { client: "Maritime Logistics Corp", line: "Marine Cargo" },
    type: "Underwriter Referral",
    status: "New",
    created: "04/20/2025",
  },
  {
    originator: { name: "Patrick Devenport", initials: "PD" },
    clientLine: { client: "GreenField Energy Ltd", line: "Environmental" },
    type: "Loss Control Request",
    status: "New",
    created: "04/16/2025",
  },

  {
    originator: { name: "Ana Killian", initials: "AK" },
    clientLine: { client: "NorthStar Financial Group", line: "D&O Liability" },
    type: "Underwriter Referral",
    status: "Pending Review",
    created: "04/22/2025",
  },

  {
    originator: { name: "Ana Killian", initials: "AK" },
    clientLine: {
      client: "Alliance Healthcare Systems",
      line: "Medical Malpractice",
    },
    type: "Email",
    status: "Completed",
    created: "04/28/2025",
  },
  {
    originator: { name: "Me", initials: "MK" },
    clientLine: { client: "QuantumTech Industries", line: "Product Liability" },
    type: "Email",
    status: "Completed",
    created: "04/20/2025",
  },
];

const WorkQueue = () => {
  const [filter, setFilter] = useState<"all" | "assigned" | "pending">("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "assigned") return task.type === "Email";
    if (filter === "pending")
      return ["Pending Review", "Referrals"].includes(task.status);
    return true;
  });
  return (
    <div className="bg-secondary p-5 rounded-[20px] flex flex-col">
      <h3 className="text-[24px]">Work Queue</h3>
      <div className="flex gap-2 mt-[21px] mb-[25px] flex-wrap">
        <Button
          variant={filter === "all" ? "default" : "dark"}
          className="px-5 py-0.5 rounded-full"
          onClick={() => setFilter("all")}
        >
          Assigned to me (12)
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "dark"}
          className="px-5 py-0.5 rounded-full"
          onClick={() => setFilter("pending")}
        >
          Pending Review (8)
        </Button>
        <Button
          variant={filter === "assigned" ? "default" : "dark"}
          className="px-5 py-0.5 rounded-full"
          onClick={() => setFilter("assigned")}
        >
          Referrals (3)
        </Button>
      </div>

      <Table data={filteredTasks} />
    </div>
  );
};

export default WorkQueue;
