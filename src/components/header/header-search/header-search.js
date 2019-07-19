export class Search extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('./components/header/header-search/header-search.css');
      </style>
      <i class="fas fa-search fa-fw"></i>
      <input type="text" placeholder="Search..." />
    `;
  }
}

customElements.define('dashing-header-search', Search);
