import MartialIntelligence from "@/components/MartialIntelligence";
import MyAccount from "@/components/MyAccount";
import PortfolioGoals from "@/components/PortfolioGoals";
import QuickActions from "@/components/QuickActions";
import WorkQueue from "@/components/WorkQueue";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="flex flex-col 2xl:grid 2xl:[grid-template-columns:3.5fr_2fr] gap-[17px] ">
        <WorkQueue />
        <div className="flex max-sm:flex-col justify-between 2xl:grid 2xl:[grid-template-columns:1fr_1fr] gap-[17px]">
          <PortfolioGoals />
          <div className="flex flex-col gap-5 sm:w-[50%] 2xl:w-full">
            <QuickActions />
            <MartialIntelligence />
          </div>
        </div>
      </div>
      <div>
        <MyAccount />
      </div>
    </div>
  );
}
