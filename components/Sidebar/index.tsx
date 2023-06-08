import DesktopSidebar from "./components/DesktopSidebar";
import MobileSidebar from "./components/MobileSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        <DesktopSidebar />
        <MobileSidebar/>

        {children}
      </main>
    </div>
  );
}

export default Sidebar;
