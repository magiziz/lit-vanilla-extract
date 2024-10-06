// Used for lightTheme and darkTheme
export const themeVars = {
  colors: {
    accentColor: "",
    accentColorText: "",
  },
  radii: {
    default: "",
  },
};

export type ThemeVars = typeof themeVars;

export const tokens = {
  colors: {
    ...themeVars.colors,
    white: "#fff",
    blue100: "#0988F0",
    gray100: "#202020",
  },
  space: {
    "2": "6px",
    "5": "16px",
  },
  radii: {
    ...themeVars.radii,
    "5": "16px",
    "6": "20px",
    "7": "24px",
  },
  fontSizes: {
    "2": "14px",
    "3": "16px",
  },
} as const;

export type Tokens = typeof tokens;
