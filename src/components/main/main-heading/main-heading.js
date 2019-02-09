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
        ${this.breadcrumbs.map(({ title, url, active }) => {
          if (active) {
            return `<a href="javascript:void(0);" class="disabled">${title}</a>`;
          }
          return `<a href="${url}">${title}</a>`;
        }).join('')}
      </nav>
    `;
  }

  get breadcrumbs() {
    return [
      { title: 'Home', url: '#' },
      { title: 'Next', url: '#next' },
      { title: 'Last', active: true },
    ];
  }
}

customElements.define('dashing-main-heading', Heading);
