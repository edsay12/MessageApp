import { styled } from "styled-components";


export const InputContainer = styled.div`
  width: 100%;
`;
export const InputArea = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(10)}rem;
  border-radius: 5px;
  border: 1px solid black;
  margin-top: ${({ theme }) => theme.pxToRem(10)}rem;
  margin-bottom: ${({ theme }) => theme.pxToRem(10)}rem;
  align-items: center;
  padding: 5px;
`;
export const InputLabel = styled.label`
  margin-top: ${({ theme }) => theme.pxToRem(20)}rem;
  
  
  text-transform: capitalize;
`;
export const InputElement = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`;
export const InputErrorMessage = styled.p`
  color: red;
  font-size: small;
`;