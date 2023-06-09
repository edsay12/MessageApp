"use client";
import { useRouter } from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./components/DesktopItem";
import { User } from "@prisma/client";
import Avatar from "@/components/Avatar";

type PropTypes = {
  currentUser: User;
};
function DesktopSidebar({ currentUser }: PropTypes) {
  const routes = useRouter();
  const [isOppen, setIsOppen] = useState(false);

  console.log(currentUser);
  return (
    <>
      Sou uma sidebar de desktop com links
      <nav>
        <ul>
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
      <nav>
        <div>
          <Avatar user={currentUser!} />
        </div>
      </nav>
    </>
  );
}

export default DesktopSidebar;
