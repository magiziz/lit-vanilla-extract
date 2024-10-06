import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./styles";

@customElement("wui-link")
export class WuiLink extends LitElement {
  public static override styles = [styles];

  render() {
    return html`<button>
      <slot></slot>
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.06248 1.43896V6.31396C8.06248 6.46315 8.00322 6.60622 7.89773 6.71171C7.79224 6.8172 7.64916 6.87646 7.49998 6.87646C7.3508 6.87646 7.20772 6.8172 7.10223 6.71171C6.99674 6.60622 6.93748 6.46315 6.93748 6.31396V2.79834L1.89795 7.83693C1.79228 7.94261 1.64895 8.00197 1.49951 8.00197C1.35007 8.00197 1.20675 7.94261 1.10107 7.83693C0.995401 7.73126 0.936035 7.58794 0.936035 7.4385C0.936035 7.28905 0.995401 7.14573 1.10107 7.04006L6.1406 2.00146H2.62498C2.4758 2.00146 2.33272 1.9422 2.22723 1.83671C2.12174 1.73122 2.06248 1.58815 2.06248 1.43896C2.06248 1.28978 2.12174 1.14671 2.22723 1.04122C2.33272 0.935728 2.4758 0.876465 2.62498 0.876465H7.49998C7.64916 0.876465 7.79224 0.935728 7.89773 1.04122C8.00322 1.14671 8.06248 1.28978 8.06248 1.43896Z"
          fill="currentColor"
        />
      </svg>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wui-link": WuiLink;
  }

  namespace JSX {
    interface IntrinsicElements {
      "wui-link":
        | React.DetailedHTMLProps<React.HTMLAttributes<WuiLink>, WuiLink>
        | Partial<WuiLink>;
    }
  }
}
