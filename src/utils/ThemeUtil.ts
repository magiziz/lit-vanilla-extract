import { assignInlineVars } from "@vanilla-extract/dynamic";
import { tokens } from "../css/vars";
import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";
import { BaseThemeParameters } from "../themes/baseTheme";
import { vars } from "../css/theme.css";

let themeStyleTag: HTMLStyleElement | null = null;
let currentThemeOptions: ThemeUtilParameters | null = null;

type ThemeType = "dark" | "light";

const themes: Record<ThemeType, typeof darkTheme | typeof lightTheme> = {
  dark: darkTheme,
  light: lightTheme,
};

interface ThemeUtilParameters extends BaseThemeParameters {
  theme: ThemeType;
  accentColor?: string;
}

export const ThemeUtil = {
  createTheme({
    theme,
    accentColor,
    ...baseThemeOptions
  }: ThemeUtilParameters) {
    if (themeStyleTag) {
      themeStyleTag.remove();
      themeStyleTag = null;
    }

    const themeFn = themes[theme];

    const { colors: themeColors, radii: themeRadii } = themeFn({
      accentColor,
      ...baseThemeOptions,
    });

    currentThemeOptions = { theme, ...baseThemeOptions };

    const themeVars = assignInlineVars(vars, {
      ...tokens,
      colors: {
        ...tokens.colors,
        ...themeColors,
      },
      radii: {
        ...tokens.radii,
        ...themeRadii,
      },
    });

    const styles = Object.entries(themeVars)
      .map(([key, style]) => `${key}:${style.replace("/[:;{}</>]/g", "")};`)
      .join("");

    themeStyleTag = document.createElement("style");
    themeStyleTag.textContent = `:root {${styles}}`;

    document.head.appendChild(themeStyleTag);
  },
  editTheme(themeOptions: Partial<ThemeUtilParameters>) {
    if (!currentThemeOptions) {
      throw new Error(
        "No current theme found. Call ThemeUtil.createTheme first."
      );
    }

    const themeVariables = {
      ...currentThemeOptions,
      ...themeOptions,
    };

    this.createTheme(themeVariables);
    currentThemeOptions = themeVariables;
  },
};
