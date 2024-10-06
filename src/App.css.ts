import { globalStyle, style } from "@vanilla-extract/css";

export const content = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "18px",
  background: "rgb(233 233 233 / 1)",
  padding: "20px",
  width: "100%",
  maxWidth: "400px",
  margin: "2rem auto",
  borderRadius: "24px",
});

export const title = style({
  fontSize: "26px",
  color: "rgb(32 32 32 / 1)",
  textAlign: "center",
});

globalStyle("label", {
  display: "flex",
  columnGap: "8px",
  cursor: "pointer",
});

globalStyle("input", {
  cursor: "pointer",
});
