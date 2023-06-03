import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { css, styled } from "styled-components";
import * as S from './styled'

type ButtonProps = {
  size: "Full" | "small" | "medium" | "large";
  icon: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function SocialButton({ icon, size = "large", onClick }: ButtonProps) {
  return (
    <S.ButtonStyled onClick={onClick} size={size}>
      {icon}
    </S.ButtonStyled>
  );
}

