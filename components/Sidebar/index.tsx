import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./components/DesktopSidebar";
import MobileSidebar from "./components/MobileSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <main>
        <DesktopSidebar currentUser={currentUser} />
        <MobileSidebar />

        {children}
      </main>
    </div>
  );
}

export default Sidebar;
