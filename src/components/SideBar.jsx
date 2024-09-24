import { useState } from "react";
import IconBell from "../assets/icons/IconBell";
import IconChat from "../assets/icons/IconChat";
import IconTeams from "../assets/icons/IconTeams";
import IconCalendar from "../assets/icons/IconCalendar";
import IconCalls from "../assets/icons/IconCalls";
import IconFiles from "../assets/icons/IconFiles";
import IconVanArsdel from "../assets/icons/IconVanArsdel";
import IconDots from "../assets/icons/IconDots";
import IconAdd from "../assets/icons/IconAdd";

const tabs = [
  { tabName: "Activity", tabIcon: IconBell },
  {
    tabName: "Chat",
    tabIcon: IconChat,
  },
  {
    tabName: "Teams",
    tabIcon: IconTeams,
  },
  {
    tabName: "Calendar",
    tabIcon: IconCalendar,
  },
  {
    tabName: "Calls",
    tabIcon: IconCalls,
  },
  {
    tabName: "Files",
    tabIcon: IconFiles,
  },
  {
    tabName: "Van Arsdel",
    tabIcon: IconVanArsdel,
  },
];

function SideBar() {
  const [activeTab, setActiveTab] = useState("Van Arsdel");

  return (
    <div className="hidden flex-col items-center gap-2 bg-opacity01 px-0.5 py-1 sm:flex">
      {tabs.map((tab) => (
        <div
          key={tab.tabName}
          onClick={() => setActiveTab(tab.tabName)}
          className={`flex h-12 w-full cursor-pointer flex-col items-center justify-center border-x-[2px] border-r-transparent transition-all duration-300 hover:bg-gray11 ${activeTab === tab.tabName ? "border-l-blue05" : "border-l-transparent"}`}
        >
          <div className="flex flex-col items-center gap-[1px]">
            <tab.tabIcon
              className={`h-6 w-6 ${activeTab === tab.tabName ? "fill-blue05" : "fill-gray05"}`}
            />
            <p
              className={`text-[10px] font-[400] ${activeTab === tab.tabName ? "text-blue05" : "text-gray05"}`}
            >
              {tab.tabName}
            </p>
          </div>
        </div>
      ))}
      <div
        onClick={() => setActiveTab("Others")}
        className={`flex h-12 w-full cursor-pointer flex-col items-center justify-center border-x-[2px] border-r-transparent transition-all duration-300 hover:bg-gray11 ${activeTab === "Others" ? "border-l-blue05" : "border-l-transparent"}`}
      >
        <div className="flex flex-col items-center gap-[1px]">
          <IconDots
            className={`h-6 w-6 ${activeTab === "Others" ? "fill-blue05" : "fill-gray05"}`}
          />
        </div>
      </div>
      <div
        onClick={() => setActiveTab("Apps")}
        className={`flex h-12 w-full cursor-pointer flex-col items-center justify-center border-x-[2px] border-r-transparent transition-all duration-300 hover:bg-gray11 ${activeTab === "Apps" ? "border-l-blue05" : "border-l-transparent"}`}
      >
        <div className="flex flex-col items-center gap-[1px]">
          <IconAdd
            className={`h-6 w-6 ${activeTab === "Apps" ? "fill-blue05" : "fill-gray05"}`}
          />
          <p
            className={`text-[10px] font-[400] ${activeTab === "Apps" ? "text-blue05" : "text-gray05"}`}
          >
            Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
