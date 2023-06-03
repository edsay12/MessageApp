import { ButtonProps } from "@/components/Button";
import { styled } from "styled-components";

export const AuthFormContainer = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.pxToRem(20)}rem;
  width: 100%;
  border-radius: 10px;
  max-width: 500px;
  margin-top: 20px;
`;
export const VariationToggleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  .toggle {
    text-decoration: underline;
    cursor: pointer;
  }
`;

