export const defaultTheme = {
  colors: {
    white:"#FFFFFF",
    blackPrimary: "#000000",
    blackSecondary: "#1D1D1D",
    redPrimary: "#E40F0F",
    redSecondary: "#DF8686",
    grayPrimary: "#EEEEEE",
    graySecondary: "#747474"
  },
  fonts: {
    fontH1: "700 2rem/2.5rem",
    fontH2: "600 1.5rem/2rem",
    fontH3: "700 1.25rem/1.5rem",
    fontH4: "700 0.75rem/1rem",

    body1Bold: "700 1rem/1.125rem",
    body1Regular: "500 1rem/1.125rem",
    body1Link: "400 1rem/1.125rem; text-decoration: underline",

    body2Bold: "700 0.875rem/1rem ",
    body2Regular: "400 0.875rem/1rem",
    body2Link:  "400 0.875rem/1rem; text-decoration: underline",

    body3Bold: "700 0.75rem/1rem",
    body3Regular: "400 0.75rem/1rem",
    body3Link:  "400 0.75rem/1rem; text-decoration: underline",

    buttonSmall:
      "600 0.875rem/1.5rem 'Nunito Sans', sans-serif; letter-spacing: 0.5px",
    buttonMedium:
      "600 1rem/1.5rem 'Nunito Sans', sans-serif; letter-spacing: 0.5px",
    buttonLarge:
      "600 1.125rem/1.5rem 'Nunito Sans', sans-serif; letter-spacing: 0.5px",

    label: "600 0.75rem/1rem 'Nunito Sans', sans-serif",

    caption: "400 0.75rem/1rem 'Nunito Sans', sans-serif",
  },
} as const;
