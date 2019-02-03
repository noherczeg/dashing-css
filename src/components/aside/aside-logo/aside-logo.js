export class Logo extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./components/aside/aside-logo/aside-logo.css');
      </style>
      LOGO
    `;
  }
}

customElements.define('dashing-aside-logo', Logo);
