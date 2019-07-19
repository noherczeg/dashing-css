export class CopyRight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('./components/footer/footer-copyright/footer-copyright.css');
      </style>
      Copyright &copy; 2019 Noone's Corp.
    `;
  }
}

customElements.define('dashing-footer-copyright', CopyRight);
