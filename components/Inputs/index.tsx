"use client";
import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { styled } from "styled-components";
import * as S from "./styled";

type inputProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
  disable?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input<T extends FieldValues>({
  id,
  label = "",
  type = "text",
  errorMessage = "",
  leftIcon,
  rightIcon,
  register,
  required,
  ...rest
}: inputProps<T>) {
  return (
    <S.InputContainer>
      <S.InputLabel htmlFor={id}>{label}</S.InputLabel>
      <S.InputArea>
        {leftIcon && leftIcon}
        <S.InputElement {...rest} id={id} type={type} {...register(id)} />
        {rightIcon && rightIcon}
      </S.InputArea>
      <S.InputErrorMessage>{errorMessage}</S.InputErrorMessage>
    </S.InputContainer>
  );
}
