import { ButtonProps } from "@/components/Button";
import { styled } from "styled-components";

export const ButtonStyled = styled.button<Partial<ButtonProps>>`
  color: #0000009e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  border: 1px solid #0000009e;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;

  opacity: 1;
  cursor: pointer;
  width: ${({ theme, size='large' }) =>
    size === "Full" ? `${100}%` : theme.default.buttonSizes[size]};
`;
