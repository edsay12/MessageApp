import { useRouter } from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./components/DesktopItem";

function DesktopSidebar() {
  const routes = useRouter();
  const [isOppen, setIsOppen] = useState(false);
  return (
    <>
      Sou uma sidebar de desktop com links
      <nav>
        <ul >
          {routes.map((item) => ( 
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={!!item.active}
              onClick={item.onClick}
            />
        ))}
        </ul>
      </nav>
    </>
  );
}

export default DesktopSidebar;