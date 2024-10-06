import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./styles";

@customElement("wui-button")
export class WuiButton extends LitElement {
  public static override styles = [styles];

  render() {
    return html`<button><slot></slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wui-button": WuiButton;
  }

  namespace JSX {
    interface IntrinsicElements {
      "wui-button":
        | React.DetailedHTMLProps<React.HTMLAttributes<WuiButton>, WuiButton>
        | Partial<WuiButton>;
    }
  }
}
