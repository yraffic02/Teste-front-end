export const defaultTheme = {
  colors: {
    white:"#FFFFFF",
    blackPrimary: "#000000",
    blackSecondary: "#1D1D1D",
    redPrimary: "#E40F0F",
    redSecondary: "#DF8686",
    grayPrimary: "#EEEEEE",
    graySecondary: "#747474",
    grayInput: "#D5D5D5"
  },
  fonts: {
    fontH1: "700 2rem/2.5rem 'Inter'",
    fontH2: "600 1.5rem/2rem 'Inter'",
    fontH3: "600 1.25rem/1.5rem 'Inter'",
    fontH4: "700 1.12rem/1.25rem Inter",

    body1Bold: "700 1rem/1.125rem 'Inter'",
    body1Regular: "500 1rem/1.125rem 'Inter'",
    body1Link: "400 1rem/1.125rem; 'Inter' text-decoration: underline",

    body2Bold: "700 0.875rem/1rem 'Inter'",
    body2Regular: "400 0.875rem/1rem 'Inter'",
    body2Link:  "400 0.875rem/1rem; 'Inter' text-decoration: underline",

    body3Bold: "700 0.75rem/1rem 'Inter'",
    body3Regular: "400 0.75rem/1rem 'Inter'",
    body3Link:  "400 0.75rem/1rem; 'Inter'; text-decoration: underline",

    buttonSmall:
      "600 0.875rem/1.5rem 'Inter'; letter-spacing: 0.5px",
    buttonMedium:
      "600 1rem/1.5rem 'Inter'; letter-spacing: 0.5px",
    buttonLarge:
      "600 1.125rem/1.5rem 'Inter'; letter-spacing: 0.5px",

    label: "600 0.75rem/1rem 'Inter'",

    caption: "400 0.75rem/1rem 'Inter'",
  },
} as const;
