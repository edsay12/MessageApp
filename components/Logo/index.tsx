"use client";
import Image, { ImageProps } from "next/image";

export function Logo({src='/images/logo.png',alt='logo',...props}:Partial<ImageProps>) {
  return <Image {...props} alt={alt}  src="/images/logo.png" />;
}
