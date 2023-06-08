import { usePathname } from "next/navigation";
import { useConversation } from "./useConversation";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { signOut } from "next-auth/react";

export const useRouter = () => {
  const pathName = usePathname();
  const { conversationId } = useConversation();

  const routes = [
    {
      label: "Chat",
      href: "/conversations",
      icon: BsFillChatDotsFill,
      active: pathName === "/conversations" || !!conversationId,
    },
    {
      label: "Users",
      href: "/users",
      icon: FaUserAlt,
      active: pathName === "/users",
    },
    {
      label: "Logout",
      href: "#",
      icon: RxExit,
      onClick: () => signOut(),
    },
  ];
  return routes;
};
