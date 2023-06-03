"use client";
import { styled } from "styled-components";
import * as S from './styled'

type PropTypes = {
  children: React.ReactNode;
};
export function LineThought({ children }: PropTypes) {
  return (
    <S.LineThoughtContainer>
      <div className="line"></div>
      {children}
      <div className="line"></div>
    </S.LineThoughtContainer>
  );
}

