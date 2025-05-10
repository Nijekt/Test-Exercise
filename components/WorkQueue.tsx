"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import Table from "./Table";
import tasks from "@/mockData/tasksData.json";

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
