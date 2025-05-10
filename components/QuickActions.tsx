import React from "react";
import { Button } from "./Button";

const QuickActions = () => {
  return (
    <div className="bg-secondary p-4 rounded-[20px] h-[50%]">
      <h3>Quick Actions</h3>
      <div className="flex flex-col gap-2 mt-5">
        <Button variant="default" className="w-full py-2 rounded-full">
          New Submission
        </Button>
        <Button variant="default" className="w-full py-2 rounded-full">
          Quote Builder
        </Button>
        <Button variant="default" className="w-full py-2 rounded-full">
          Risks Models
        </Button>
        <Button variant="default" className="w-full py-2 rounded-full">
          Documents Upload
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
