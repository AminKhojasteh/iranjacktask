import IconLeft from "../assets/icons/IconLeft";
import IconRight from "../assets/icons/IconRight";
import IconMagnifier from "../assets/icons/IconMagnifier";
import IconDots from "../assets/icons/IconDots";
import IconDash from "../assets/icons/IconDash";
import IconSquare from "../assets/icons/IconSquare";
import IconCross from "../assets/icons/IconCross";
import IconTick from "../assets/icons/IconTick";
import Logo from "../assets/icons/Logo";

function TitleBar() {
  return (
    <div className="col-span-2 hidden items-center justify-between bg-opacity01 sm:flex">
      <div className="block px-[22px]">
        <Logo className="h-6 w-6" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <IconLeft className="h-8 w-8 fill-gray03 p-1.5" />
          <IconRight className="h-8 w-8 fill-gray03 p-1.5" />
        </div>
        <div className="relative shadow-md">
          <input
            type="text"
            placeholder="Search"
            className="h-8 w-[468px] rounded-[4px] pb-0.5 pl-[38px] text-sm font-[400] placeholder:text-gray06 focus:outline-gray08"
          />
          <IconMagnifier className="absolute left-[10px] top-1/2 h-5 w-5 -translate-y-1/2 fill-gray05" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <IconDots className="h-8 w-8 fill-gray03 p-1.5" />
          <div className="relative w-8">
            <img src="avatar.png" className="w-8" />
            <IconTick className="absolute bottom-0 right-0 h-[10px] w-[10px]" />
          </div>
        </div>
        <div className="flex">
          <IconDash className="h-12 w-12 fill-gray01" />
          <IconSquare className="h-12 w-12 fill-gray01" />
          <IconCross className="h-12 w-12 fill-gray01" />
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
