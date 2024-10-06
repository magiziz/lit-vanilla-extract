import { css } from "../../css/lit";
import { vars } from "../../css/theme.css";

export default css`
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 46px;
    will-change: border-radius, background-color;
    transition: background-color 0.125s ease, border-radius 0.125s ease;
    border-radius: ${vars.radii.default};
    background: ${vars.colors.accentColor};
    color: ${vars.colors.accentColorText};
  }

  div:hover {
    border-radius: ${vars.radii[6]};
  }
`;
