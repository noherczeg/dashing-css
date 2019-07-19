export class Logo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('./components/aside/aside-logo/aside-logo.css');
      </style>
      <span class="logo">LOGO</span>
      <span class="logo-collapsed">L</span>
    `;
  }
}

customElements.define('dashing-aside-logo', Logo);
