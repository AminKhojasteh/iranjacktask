import { useState } from "react";
import IconBell from "../assets/icons/IconBell";
import IconChat from "../assets/icons/IconChat";
import IconTeams from "../assets/icons/IconTeams";
import IconCalendar from "../assets/icons/IconCalendar";
import IconDots from "../assets/icons/IconDots";

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
];

function TabBar() {
  const [activeTab, setActiveTab] = useState("More");

  return (
    <div className="h-full border-t-[0.5px] border-gray10 sm:hidden">
      <div className="grid h-[60px] grid-cols-5">
        {tabs.map((tab) => (
          <div
            key={tab.tabName}
            onClick={() => setActiveTab(tab.tabName)}
            className="flex h-full w-full cursor-pointer flex-col items-center justify-evenly transition-all duration-300"
          >
            <tab.tabIcon
              className={`h-6 w-6 ${activeTab === tab.tabName ? "fill-blue05" : "fill-gray01"}`}
            />
            <p
              style={{ letterSpacing: "0.12px" }}
              className={`text-[10px] font-medium ${activeTab === tab.tabName ? "text-blue05" : "text-gray05"}`}
            >
              {tab.tabName}
            </p>
          </div>
        ))}
        <div
          onClick={() => setActiveTab("More")}
          className="flex h-full w-full cursor-pointer flex-col items-center justify-evenly transition-all duration-300"
        >
          <IconDots
            className={`h-6 w-6 ${activeTab === "More" ? "fill-blue05" : "fill-gray01"}`}
          />
          <p
            style={{ letterSpacing: "0.12px" }}
            className={`text-[10px] font-medium ${activeTab === "More" ? "text-blue05" : "text-gray05"}`}
          >
            More
          </p>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
