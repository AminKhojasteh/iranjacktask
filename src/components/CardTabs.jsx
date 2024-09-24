import { useState } from "react";

function CardTabs({ cardTabs, isItForMobile }) {
  const [activeTab, setActiveTab] = useState(cardTabs[0]);

  return (
    <div
      className={`flex items-center ${isItForMobile ? "mx-auto h-6 w-max" : "h-8"}`}
    >
      {cardTabs.map((cardTab) => (
        <div
          key={cardTab}
          onClick={() => setActiveTab(cardTab)}
          className="relative h-full cursor-pointer px-[6px]"
        >
          <span
            className={`font-semibold text-transparent ${isItForMobile ? "text-[13px]" : "text-sm"}`}
          >
            {cardTab}
          </span>
          <span
            className={`absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 border-y-2 border-t-transparent py-1 ${isItForMobile ? "text-[13px]" : "text-sm"} ${activeTab === cardTab ? `${isItForMobile ? "border-b-green02" : "border-b-blue05"} font-semibold text-gray01` : `border-b-transparent font-[400] ${isItForMobile ? "text-gray065" : "text-gray05"}`}`}
          >
            {cardTab}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CardTabs;
