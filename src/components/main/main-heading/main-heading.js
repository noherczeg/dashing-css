export class Heading extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./components/main/main-heading/main-heading.css');
      </style>
      <h2>Dashboard</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">Next</a>
        <a href="#" class="disabled">Last</a>
      </nav>
    `;
  }
}

customElements.define('dashing-main-heading', Heading);
