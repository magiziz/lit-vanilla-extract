import { ThemeVars } from "../css/vars";
import { baseTheme, BaseThemeParameters } from "./baseTheme";

export function lightTheme({
  borderRadius,
  accentColor = "#202020",
}: BaseThemeParameters): ThemeVars {
  return {
    ...baseTheme({ borderRadius }),
    colors: {
      accentColor,
      accentColorText: "#fff",
    },
  };
}
