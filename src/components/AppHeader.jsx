import { useState } from "react";
import IconRefrence from "../assets/icons/IconRefrence";
import IconDots from "../assets/icons/IconDots";

const tabs = ["Home", "Timeline", "Chat", "Assigned to you"];

function AppHeader() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="col-span-2 hidden items-center gap-1 border-b-2 border-gray10 px-5 sm:flex">
      <div className="flex items-center gap-3">
        <img src="./src/assets/img/VanArsdel.png" className="h-8 w-8" />
        <p className="text-lg font-bold">Van Arsdel</p>
      </div>
      <ul className="flex h-full grow gap-3 px-[10px]">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative cursor-pointer border-y-[3px] border-transparent text-sm transition-all duration-300 ${activeTab === tab ? "border-b-blue05" : ""}`}
          >
            <span className="font-bold text-transparent">{tab}</span>
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 font-[400] ${activeTab === tab ? "font-bold" : ""}`}
            >
              {tab}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 px-[6px]">
        <IconRefrence className="h-5 w-5 cursor-pointer fill-gray03" />
        <IconDots className="h-5 w-5 cursor-pointer fill-gray03" />
      </div>
    </div>
  );
}

export default AppHeader;
