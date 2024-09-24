import TitleBar from "../components/TitleBar";
import MainFrameDesktop from "./MainFrameDesktop";
import SideBar from "../components/SideBar";
import NavigationBar from "../components/NavigationBar";
import Tabs from "../components/Tabs";
import TabBar from "../components/TabBar";
import MainFrameMobile from "./MainFrameMobile";

function AppFrame() {
  return (
    <div className="mx-auto grid h-screen grid-rows-[44px_44px_1fr_83px] overflow-hidden sm:h-min sm:max-w-[1366px] sm:grid-cols-[68px_1fr] sm:grid-rows-[48px_1fr] sm:rounded-lg sm:border-b sm:border-r sm:border-gray10 2xl:h-[1012px]">
      <TitleBar />
      <SideBar />
      <MainFrameDesktop />
      <NavigationBar />
      <Tabs />
      <MainFrameMobile />
      <TabBar />
    </div>
  );
}

export default AppFrame;
