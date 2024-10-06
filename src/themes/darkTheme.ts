import { ThemeVars } from "../css/vars";
import { baseTheme, BaseThemeParameters } from "./baseTheme";

export function darkTheme({
  borderRadius,
  accentColor = "#fff",
}: BaseThemeParameters): ThemeVars {
  return {
    ...baseTheme({ borderRadius }),
    colors: {
      accentColor,
      accentColorText: "#202020",
    },
  };
}
