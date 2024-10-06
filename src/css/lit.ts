import { CSSResultGroup, css as litCSS, unsafeCSS } from "lit";

export function css(
  strings: TemplateStringsArray,
  ...values: (CSSResultGroup | number | string)[]
) {
  const extractedCSS = values.map((value) =>
    typeof value === "string" ? unsafeCSS(value) : value
  );

  return litCSS(strings, ...extractedCSS);
}
