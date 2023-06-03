import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import * as S from "./style";

export type ButtonProps = {
  size: "Full" | "small" | "medium" | "large";
  isDisable?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  isDisable,
  size = "Full",
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <S.Button {...rest} onClick={onClick} isDisable={isDisable} disabled={isDisable} size={size} >
      {children}
    </S.Button>
  );
}
