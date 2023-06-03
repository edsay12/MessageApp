"use client";

import { styled, css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  background-color: #156eec;
  color: white;

  border: none;
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;

  opacity: 1;
  cursor: pointer;
  width: ${({ theme, size }) =>
    size === "Full" ? `${100}%` : theme.default.buttonSizes[size]};
  // mudar depois 
  ${({ isDisable }) => isDisable && (
    css`
      opacity: 0.5;
      cursor: wait;
    `
  )}
`;
