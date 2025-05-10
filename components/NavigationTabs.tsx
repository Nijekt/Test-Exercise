"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./Button";
import {
  LuHouse,
  LuDatabase,
  LuFileSymlink,
  LuBuilding2,
  LuUsersRound,
  LuGoal,
  LuKeyRound,
} from "react-icons/lu";

const NavigationTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "Dashboard", icon: LuHouse, path: "/" },
    { label: "Accounts", icon: LuDatabase, path: "/accounts/2" },
    { label: "Brokers", icon: LuUsersRound, path: "/brokers" },
    { label: "Submissoin", icon: LuFileSymlink, path: "/submissoin" },
    { label: "Organizations", icon: LuBuilding2, path: "/organizations" },
    { label: "Goals & Rules", icon: LuGoal, path: "/goals" },
    { label: "Admin", icon: LuKeyRound, path: "/admin" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3.5 my-[17px]">
        {tabs.map(({ label, icon: Icon, path }) => {
          const isActive =
            label === "Accounts"
              ? pathname.includes("accounts")
              : pathname === path;

          return (
            <Button
              key={label}
              variant={isActive ? "default" : "dark"}
              onClick={() => router.push(path || "/")}
              className="flex items-center gap-2 px-5 py-2 whitespace-nowrap rounded-full"
            >
              <Icon
                size={20}
                className={isActive ? "text-foreground" : "text-primary"}
              />
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationTabs;
