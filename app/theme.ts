
export const theme = {
  default: {
    colors: {
      black: "black",
      white: "white",
    },
    sizes: {
      small: "1rem",
      medium: "2rem",
      large: "3rem",
    },
    buttonSizes: {
      small: "2rem",
      medium: "4rem",
      large: "8rem",
    },
  },
  dark: {
    colors: {},
  },
  pxToRem: convertPxToRem,
};

function convertPxToRem(pxValue: number, baseFontSize: number = 16): string {
  const remValue = pxValue / baseFontSize;
  return `${remValue}`;
}
