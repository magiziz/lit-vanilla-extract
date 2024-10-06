import "./composites";

import { ThemeUtil } from "./utils/ThemeUtil";
import * as styles from "./App.css";
import { Options } from "./components/Options/Options";
import { useState } from "react";

const radiusScales = ["large", "small", "none"] as const;

type RadiusScale = (typeof radiusScales)[number];

const accentColors = {
  blue: "#0988F0",
  red: "#DF4A34",
  slate: "#3A4751",
} as const;

type AccentColor = (typeof accentColors)[keyof typeof accentColors];

const themes = ["dark", "light"] as const;

type Theme = (typeof themes)[number];

ThemeUtil.createTheme({
  theme: "light",
});

export default function App() {
  const [radiusScale, setRadiusScale] = useState<RadiusScale>("large");
  const [accentColor, setAccentColor] = useState<AccentColor>();
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Lit ⚡ x 🧁 Vanilla Extract</h1>

      {/* Composites */}
      <wui-button>Connect Wallet</wui-button>
      <wui-icon></wui-icon>
      <wui-link>Link</wui-link>

      {/* Options */}
      <Options
        title="Border radius"
        values={radiusScales}
        checkedId={radiusScale}
        onChange={(radiusScale) => {
          ThemeUtil.editTheme({
            borderRadius: radiusScale,
          });
          setRadiusScale(radiusScale);
        }}
      />
      <Options
        title="Themes"
        values={themes}
        checkedId={theme}
        onChange={(theme) => {
          ThemeUtil.editTheme({
            theme,
          });
          setTheme(theme);
        }}
      />
      <Options
        title="Accent colors"
        values={Object.keys(accentColors) as AccentColor[]}
        onItemRender={(color) => (
          <label key={color}>
            <input
              onChange={() => {
                ThemeUtil.editTheme({
                  accentColor: accentColors[color as keyof typeof accentColors],
                });
                setAccentColor(color);
              }}
              type="radio"
              value={color}
              checked={accentColor === color}
            />
            {color}
          </label>
        )}
      />
    </div>
  );
}
