import { useState } from "react";

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="grid h-[44px] grid-cols-3 items-center justify-center border-b-[0.5px] border-gray10 sm:hidden">
      {tabs.map((tab) => (
        <p
          key={tab}
          style={{ letterSpacing: "-0.23px" }}
          onClick={() => setActiveTab(tab)}
          className={`flex h-full cursor-pointer items-center justify-center border-blue05 text-[15px] text-gray01 ${tab === activeTab ? "border-b-2 font-[600]" : "font-[400]"}`}
        >
          {tab}
        </p>
      ))}
    </div>
  );
}

export default Tabs;
