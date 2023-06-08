import Link from "next/link";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

type PropTypes = {
  href: string;
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
};

function DesktopItem({ active, href, icon: Icon, label, onClick }: PropTypes) {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick}>
      {" "}
      <Link href={href}>
        <Icon />
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default DesktopItem;
