import React from "react";
import { Button } from "./Button";
import Input from "./Input";
import { LuPaperclip } from "react-icons/lu";

const Communication = () => {
  return (
    <div className="flex flex-col gap-8 w-full bg-secondary mt-4 px-[20px] py-[24px] rounded-[20px]">
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
      <div className="mx-[15px] columns-1 md:columns-2">
        <div className="w-full mb-4 inline-block gap-2 bg-third p-6 rounded-[20px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#1E40AF] py-1 px-3 rounded-full">NEW</span>
              <h3>Policy Renewal - Auto Insurance 5/15/25</h3>
            </div>
            <span>Michael Roberts // Apr 5</span>
            <p>
              Hello Arthur, I'm reaching out regarding the upcoming auto policy
              renewal for Real Estate Group, LLC. The current policy expires on
              6/30/2024. Would you like to review coverage options before
              proceeding with the renewal? I've attached the current policy
              details and premium breakdown for your reference.
            </p>
            <Button
              variant="empty"
              className="w-[169px] bg-[#3bb97a50] rounded-full"
            >
              <LuPaperclip className="mr-2" />3 attachments
            </Button>
            <Button
              variant="default"
              className="w-[120px] h-[40px] rounded-full"
            >
              Reply
            </Button>
          </div>
        </div>

        <div className="w-full mb-4 inline-block gap-2 bg-third p-6 rounded-[20px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#1E40AF]  py-1 px-3 rounded-full">NEW</span>
              <h3>New Quote Request - Workers Comp insurance</h3>
            </div>
            <span>Sarh Chen // Apr 5</span>
            <p>
              Hi Arthur, Real Estate Group has expressed interest in adding
              workers compensation coverage to their insurance portfolio. I've
              completed the initial risk assessment based
            </p>

            <Button
              variant="empty"
              className="w-[169px] bg-[#3bb97a50] rounded-full"
            >
              <LuPaperclip className="mr-2" />3 attachments
            </Button>
            <Button
              variant="default"
              className="w-[120px] h-[40px] rounded-full"
            >
              Reply
            </Button>
          </div>
        </div>

        <div className="w-full mb-4 inline-block gap-2 bg-third p-6 rounded-[20px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#1E40AF] py-1 px-3 rounded-full">
                Responded
              </span>
              <h3>Fwd: New Submission - BPM Real Estate - EFF 4/1/24</h3>
            </div>
            <span>Joshua Dunmire // Mar 25</span>
            <p>
              Arthur, attached please find our submission for the above
              mentioned applicant. We have...
            </p>
          </div>
        </div>

        <div className="w-full mb-4 inline-block gap-2 bg-third p-6 rounded-[20px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3>New Business: BPM Real Estate Group, LLC</h3>
            </div>
            <span>Isabel Kreller // Feb 28</span>
            <p>
              Hello Arthur, I am pleased to present you with a submission on
              this client&#39;s upco...
            </p>
            <Button
              variant="empty"
              className="w-[169px] bg-[#3bb97a50] rounded-full"
            >
              <LuPaperclip className="mr-2" />3 attachments
            </Button>
            <Button
              variant="default"
              className="w-[120px] h-[40px] rounded-full"
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
