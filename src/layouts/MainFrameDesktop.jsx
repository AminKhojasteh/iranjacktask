import AppHeader from "../components/AppHeader";
import Dashboard from "../components/Dashboard";
import LeftNav from "../components/LeftNav";
import Toolbar from "../components/Toolbar";

function MainFrameDesktop() {
  return (
    <div className="hidden h-full w-full grid-cols-[183px_1fr] grid-rows-[60px_48px_1fr] sm:grid">
      <AppHeader />
      <Toolbar />
      <LeftNav />
      <Dashboard />
    </div>
  );
}

export default MainFrameDesktop;
