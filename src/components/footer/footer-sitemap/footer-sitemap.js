export class SiteMap extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./components/footer/footer-sitemap/footer-sitemap.css');
      </style>
      <div class="sitemap-entry">
        <h4>Category 1</h4>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
      <div class="sitemap-entry">
        <h4>Category 2</h4>
        <ul>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </div>
      <div class="sitemap-entry">
        <h4>Category 3</h4>
        <ul>
          <li>Six</li>
          <li>Seven</li>
          <li>Eight</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('dashing-footer-sitemap', SiteMap);
