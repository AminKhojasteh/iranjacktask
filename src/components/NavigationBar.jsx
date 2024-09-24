import IconRobot from "../assets/icons/IconRobot";
import IconDots from "../assets/icons/IconDots";

function NavigationBar() {
  return (
    <div className="flex items-center justify-between px-4 sm:hidden">
      <div className="flex items-center gap-3">
        <img src="avatar.png" className="h-8 w-8" />
        <p className="text-[26px] font-[700] text-gray01">Van Arsdel</p>
      </div>
      <div className="flex items-center justify-between gap-5">
        <IconRobot className="h-6 w-6 fill-blue05" />
        <IconDots className="h-6 w-6 fill-gray01" />
      </div>
    </div>
  );
}

export default NavigationBar;
