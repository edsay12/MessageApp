import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import * as S from "./style";

export type ButtonProps = {
  size: "Full" | "small" | "medium" | "large";
  isdisable?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  isdisable = false,
  size = "Full",
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <S.Button {...rest} onClick={onClick} isdisable size={size} disabled={isdisable}>
      {children}
    </S.Button>
  );
}
