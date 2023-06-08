"use client";

import { useRouter } from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "../DesktopSidebar/components/DesktopItem";
import { useConversation } from "@/hooks/useConversation";
import MobileItem from "./components/MobileItem";

function MobileSidebar() {
  const routes = useRouter();
  const { isOppen } = useConversation();

  if (isOppen) {
    return null;
  }
  return (
    <>
      Sou uma sidebar de MObile com links
      <nav>
        <ul>
          {routes.map((item) => (
            <MobileItem
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

export default MobileSidebar;
