import { ThemeVars } from "../css/vars";

export type RadiusScale = "large" | "small" | "none";

const radiusScales: Record<RadiusScale, ThemeVars["radii"]> = {
  large: {
    default: "16px",
  },
  small: {
    default: "8px",
  },
  none: {
    default: "0px",
  },
};

export interface BaseThemeParameters {
  borderRadius?: RadiusScale;
  accentColor?: string;
}

export function baseTheme({
  borderRadius = "large",
}: BaseThemeParameters): Pick<ThemeVars, "radii"> {
  return {
    radii: {
      default: radiusScales[borderRadius].default,
    },
  };
}
