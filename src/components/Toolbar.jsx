import IconCircle from "../assets/icons/IconCircle";
import IconLines from "../assets/icons/IconLines";
import IconDown from "../assets/icons/IconDown";
import IconMagnifier from "../assets/icons/IconMagnifier";
import CheckboxGroup from "./CheckboxGroup";
import Devider from "./Devider";

function Toolbar() {
  return (
    <div className="col-span-2 hidden items-center justify-between border-b-2 border-gray10 px-5 sm:flex">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="p-[6px]">
            <IconLines className="h-5 w-5 cursor-pointer fill-gray03" />
          </div>
          <button className="flex items-center gap-1 rounded-[4px] bg-blue05 px-3 py-[5px]">
            <IconCircle className="h-5 w-5 fill-white" />
            <span className="ml-0.5 text-sm font-semibold text-white">
              Text
            </span>
            <IconDown className="h-3 w-3 fill-white" />
          </button>
        </div>
        <div className="flex items-center">
          <CheckboxGroup groupName="test" options={["Text", "Text"]} />
          <Devider />
          <CheckboxGroup groupName="test" options={["Text", "Text", "Text"]} />
          <Devider />
          <CheckboxGroup groupName="test" options={["Text", "Text"]} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-sm font-semibold text-gray03">Filter</p>
        <div className="relative shadow-md">
          <input
            type="text"
            placeholder="Find"
            className="h-8 w-[200px] rounded-[4px] border border-gray09 pb-0.5 pl-[32px] text-sm font-[400] placeholder:text-gray06 focus:outline-gray08"
          />
          <IconMagnifier className="absolute left-[10px] top-1/2 h-5 w-5 -translate-y-1/2 fill-gray05" />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
