import { css } from "../../css/lit";
import { vars } from "../../css/theme.css";

export default css`
  button {
    cursor: pointer;
    outline: none;
    border: none;
    will-change: border-radius, background-color;
    transition: background-color 0.125s ease, border-radius 0.125s ease;
    border-radius: ${vars.radii.default};
    padding: ${vars.space[5]};
    font-size: ${vars.fontSizes[3]};
    font-family: "KHTeka";
    background: ${vars.colors.accentColor};
    color: ${vars.colors.accentColorText};
  }

  button:hover {
    border-radius: ${vars.radii[7]};
  }
`;
